import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Cruncher from '../src/components/cruncher';
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
    cruncherObject = {
      name: "Cruncher 1",
      settings: [
        {"setting 1": {value: "data 1", mandatory: true}},
        {"setting 2": {value: "data 2", mandatory: false}}
      ]
    }
  });
  describe('when displayed', () => {
    it('should should render', () => {
      const wrapper = shallow(<Cruncher cruncherInfo={cruncherObject}/>);
    });
    
    it('should display name of the cruncher', () => {
      const wrapper = shallow(<Cruncher cruncherInfo={cruncherObject}/>);
      expect(wrapper.find('.cruncherName')).to.have.length(1);
      expect(wrapper.find('.cruncherName').text()).to.contain('Cruncher 1');
    });

    describe('when have 2 settings', () => {
      let cruncherWrapper;
      beforeEach(() => {
        cruncherWrapper = mount(<Cruncher cruncherInfo={cruncherObject}/>);
      });
      it('should display two settings', () => {
        expect(cruncherWrapper.find('.settings')).to.have.length(2);
        expect(cruncherWrapper.find('.settings')[0].text()).to.contain('property 1');
      });
    });
    
  });
});