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
}