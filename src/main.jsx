import React from 'react';
import { render } from 'react-dom';
import Cruncher from './components/cruncher';

const appRoot = document.getElementById('root');
let cruncherObject = {
  name: "Cruncher 1",
  settings: [
    { "setting 1": { value: "data 1", mandatory: true } },
    { "setting 2": { value: "data 2", mandatory: false } }
  ]
};
render(
  <Cruncher cruncherInfo={cruncherObject}/>,
  appRoot
);