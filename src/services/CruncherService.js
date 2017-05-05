import axios from 'axios';
import CruncherModel from '../models/CruncherModel';
export default class CruncherService {
  constructor() {
    this.cruncherURL = 'http://localhost:8080/admin/settings';
  }
  getCruncherInformation() {
    return axios.get(this.cruncherURL)
      .then((data) => {
        if (!data.cruncherSettings
          || data.cruncherSettings.length === 0) {
          return [];
        } else {
          let allCrunchers = [];
          let settings = data.cruncherSettings;
          for(let name in settings) {
            allCrunchers.push(CruncherModel.build(name, settings[name]));
          }
          return allCrunchers;
        }
      })
      .catch(() => {
        return null;
      });
  }
}