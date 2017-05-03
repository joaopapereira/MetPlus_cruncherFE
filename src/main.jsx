import React from 'react';
import { render } from 'react-dom';
import Cruncher from './components/cruncher';
import CruncherModel from './models/CruncherModel';
import CruncherSetting from './models/CruncherSetting';

const appRoot = document.getElementById('root');
let cruncherObject = {
  name: "Cruncher 1",
  settings: [
    { "setting 1": { value: "data 1", mandatory: true } },
    { "setting 2": { value: "data 2", mandatory: false } }
  ]
};
cruncherObject = new CruncherModel("Cruncher 1");
cruncherObject.addSetting(new CruncherSetting('setting 1', 'data 1', true));
cruncherObject.addSetting(new CruncherSetting('setting 2', 'data 2', true));
render(
  <Cruncher cruncherInfo={cruncherObject}/>,
  appRoot
);