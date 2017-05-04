import React from 'react';
import PropTypes from 'prop-types';


import CruncherSetting from '../models/CruncherSetting';

export default class CruncherSettingItem extends React.Component {
  render() {
    const setting = this.props.cruncherSetting;
    return <div>
      {setting.name}: <input value={setting.value} type='text'/>
    </div>;
  }
}

CruncherSettingItem.propTypes = {
  cruncherSetting: PropTypes.instanceOf(CruncherSetting).isRequired,
};