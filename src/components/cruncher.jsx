import React from 'react';
import PropTypes from 'prop-types';

export default class Cruncher extends React.Component {
  constructor(props) {
    super(props);
  }
  renderProperties() {
      this.props.cruncherInfo.settings
  }
  render() {
    return (
      <div>
        <div className="cruncherName">
          Cruncher Name: {this.props.cruncherInfo.name}
        </div>
      </div>
    );
  }
};

Cruncher.propTypes = {
    cruncherInfo: PropTypes.object.isRequired,
}