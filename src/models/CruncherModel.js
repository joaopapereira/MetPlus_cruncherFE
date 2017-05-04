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
      for(let setting in jsonObject['settings']) {
        cruncher.addSetting(new CruncherSetting(setting['name'], setting['data']));
      }
      return cruncher;
    }
    return null;
  }
}