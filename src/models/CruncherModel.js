import CruncherSetting from './CruncherSetting';

export default class CruncherModel {
  constructor(name) {
    this.settings = [];
    this.name = name;
  }

  addSetting(setting) {
    this.settings.push(setting);
  }

  getSettings() {
    return this.settings;
  }
  static build(name, jsonObject) {
    if(!!jsonObject) {
      let cruncher = new CruncherModel(name);
      for(let settingName in jsonObject['settings']) {
        let setting = jsonObject['settings'][settingName];
        cruncher.addSetting(
          new CruncherSetting(setting['name'], 
          setting['data'],
          jsonObject['mandatory'].includes(setting['name'])));
      }
      return cruncher;
    }
    return null;
  }
}