class CruncherSettingList {
  constructor() {
    this.settings = [];
  }
  addSetting(setting) {
    this.settings.push(setting);
  }
  getSettings() {
    return this.settings;
  }
}

export default class CruncherSetting {
  constructor(name, value, mandatory) {
    this.name = name;
    this.value = value;
    this.mandatory = mandatory;
  }
  static build(jsonObject, isMandatory) {
    let data = jsonObject['data'];
    let name = jsonObject['name'];
    if(data === null){
      return null;
      // } else if (typeof data === 'object') {
    } else if (data.hasOwnProperty('length')) {
      if(data.length > 0 && typeof data[0] !== 'object') {
        // simple array
      }
    } else if (typeof data === 'object') {
      if(data['name'] === undefined) {
        let builtData = [];
        data.forEach((setting, name) => {
          setting['name'] = name;
          builtData.push(CruncherSetting.build(setting));
        });
        data = builtData;
      }
    }
    return new CruncherSetting(name, data, isMandatory);
  }
}
