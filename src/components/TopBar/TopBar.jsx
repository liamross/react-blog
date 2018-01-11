import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './TopBar.scss';

const propTypes = {};

const defaultProps = {};

class TopBar extends Component {
  render() {
    return (
      <div className="TopBar">
        TOPBAR GOES HERE
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {}
);

const mapDispatchToProps = (dispatch) => (
  {}
);

TopBar.propTypes = propTypes;
TopBar.defaultProps = defaultProps;
const topBar = connect(mapStateToProps, mapDispatchToProps)(TopBar);
export { topBar as TopBar };
