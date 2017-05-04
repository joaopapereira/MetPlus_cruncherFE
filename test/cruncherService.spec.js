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
          done();
        });
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
          const resolved = new Promise((resolve) => resolve({ data: cruncherInformation }));
          sandbox.stub(axios, 'get').returns(resolved);
        });

        it('should return an array with one cruncher', (done) => {
          cruncherService.getCruncherInformation().then((cruncherInformation) => {
            expect(cruncherInformation).to.have.length(1);
            expect(crun)
            done();
          });
        });
        
        it('should set name of the cruncher to "bamm"', (done) => {
          cruncherService.getCruncherInformation().then((cruncherInformation) => {
            expect(cruncherInformation[0].name).to.equal('bamm');
            done();
          });
        });
      });
    });
  });
});