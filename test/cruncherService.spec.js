import { expect } from 'chai';
import sinon from 'sinon';
import axios from 'axios';
import CruncherService from '../src/services/CruncherService';

describe('Cruncher Service', () => {
  let sandbox, cruncherService;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    cruncherService = new CruncherService();
  });
  afterEach(() => {
    sandbox.restore();
  });

  describe('when successfuly getting settings from the cruncher', () => {
    describe('when no cruncher information is returned', () => {
      beforeEach(() => {
        const resolved = new Promise((resolve) => resolve({ data: { 'cruncherSettings': {} } }));
        sandbox.stub(axios, 'get').returns(resolved);
      });

      it('should return empty array', (done) => {
        cruncherService.getCruncherInformation().then((cruncherInformation) => {
          expect(cruncherInformation).to.have.length(0);
        }).then(done).catch(done);
      });
    });
    describe('when one cruncher information is returned', () => {
      describe('without settings', () => {
        beforeEach(() => {
          let cruncherInformation = {
            'cruncherSettings': {
              'bamm': {
                'settings': {
                },
                'mandatory': [],
                'id': null,
              },
            },
          };
          const resolved = new Promise((resolve) => resolve(cruncherInformation));
          sandbox.stub(axios, 'get').returns(resolved);
        });

        it('should return an array with one cruncher', (done) => {
          cruncherService.getCruncherInformation().then((cruncherInformation) => {
            expect(cruncherInformation).to.have.length(1);
          }).then(done).catch(done);
        });
        
        it('should set name of the cruncher to "bamm"', (done) => {
          cruncherService.getCruncherInformation().then((cruncherInformation) => {
            expect(cruncherInformation[0].name).to.equal('bamm');
          }).then(done).catch(done);
        });
        
        it('should have no settings', (done) => {
          cruncherService.getCruncherInformation().then((cruncherInformation) => {
            expect(cruncherInformation[0].getSettings()).to.have.length(0);
          }).then(done).catch(done);
        });
      });

      describe('with settings', () => {
        beforeEach(() => {
          let cruncherInformation = {
            'cruncherSettings': {
              'bamm': {
                'settings': {
                  'setting 1': {
                    name: 'setting 1',
                    data: 'value 1',
                  },
                  'setting 2': {
                    name: 'setting 2',
                    data: 'value 2',
                  },
                },
                'mandatory': ['setting 1'],
                'id': null,
              },
            },
          };
          const resolved = new Promise((resolve) => resolve(cruncherInformation));
          sandbox.stub(axios, 'get').returns(resolved);
        });
        
        it('should have 2 settings', (done) => {
          cruncherService.getCruncherInformation().then((cruncherInformation) => {
            expect(cruncherInformation[0].getSettings()).to.have.length(2);
          }).then(done).catch(done);
        });

        it('should construct correctly', (done) => {
          cruncherService.getCruncherInformation().then((cruncherInformation) => {
            expect(cruncherInformation[0].getSettings()).to.have.length(1);
          }).then(done).catch(done);
        });
      });
    });
  });
});