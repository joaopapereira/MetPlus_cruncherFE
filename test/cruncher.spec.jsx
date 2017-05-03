import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Cruncher from '../src/components/cruncher';
import CruncherModel from '../src/models/CruncherModel';
import CruncherSetting from '../src/models/CruncherSetting';

let test = {
  "cruncherSettings": {
    "bamm": {
      "settings": {
        "setting 1": {
          "name": "setting 1",
          "data": "data 1"
        },
        "setting 2": {
          "name": "setting 2",
          "data": "data 2"
        }
      },
      "mandatory": ["setting 1"],
      "id": null
    }
  },
}

describe('<Cruncher>', () => {
  let cruncherObject;
  beforeEach(() => {
    cruncherObject = new CruncherModel('Cruncher 1');
    cruncherObject.addSetting(new CruncherSetting('setting 1', 'data 1', true));
    cruncherObject.addSetting(new CruncherSetting('setting 2', 'data 2', false));
  });

  describe('when displayed', () => {
    it('should should render', () => {
      const wrapper = shallow(<Cruncher cruncherInfo={cruncherObject} />);
    });

    it('should display name of the cruncher', () => {
      const wrapper = shallow(<Cruncher cruncherInfo={cruncherObject} />);
      expect(wrapper.find('.cruncherName')).to.have.length(1);
      expect(wrapper.find('.cruncherName').text()).to.contain('Cruncher 1');
    });

    describe('when have 2 settings', () => {
      let cruncherWrapper;
      beforeEach(() => {
        cruncherWrapper = mount(<Cruncher cruncherInfo={cruncherObject} />);
      });

      it('should display two settings', () => {
        expect(cruncherWrapper.find('.settings')).to.have.length(2);

        let setting1 = cruncherWrapper.find('.settings').at(0);
        expect(setting1.text()).to.contain('setting 1');
        let setting2 = cruncherWrapper.find('.settings').at(1);
        expect(setting2.text()).to.contain('setting 2');
      });

      it('should display 2 input boxes with values', () => {
        expect(cruncherWrapper.find('input')).to.have.length(2);

        let setting1 = cruncherWrapper.find('input').at(0);
        expect(setting1.props().value).to.contain('data 1');
        let setting2 = cruncherWrapper.find('input').at(1);
        expect(setting2.props().value).to.contain('data 2');
      });
    });
  });
});