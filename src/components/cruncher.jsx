import React from 'react';
import PropTypes from 'prop-types';

import CruncherModel from '../models/CruncherModel';
import CruncherSettingItem from './cruncherSettingItem';

export default class Cruncher extends React.Component {
  constructor(props) {
    super(props);
  }
  renderProperties() {
    let settingsList = [];
    this.props.cruncherInfo.getSettings().forEach((setting, id) => {
      settingsList.push(<li className="settings" key={id}>
        <CruncherSettingItem cruncherSetting={setting} />
      </li>);
    });
    return settingsList;
  }
  render() {
    return (<div>
      <div className="cruncherName">
        Cruncher Name: {this.props.cruncherInfo.name}
      </div>
      <ul className="settingsList">
        {this.renderProperties()}
      </ul>
    </div>
    );
  }
};

Cruncher.propTypes = {
  cruncherInfo: PropTypes.instanceOf(CruncherModel).isRequired,
};