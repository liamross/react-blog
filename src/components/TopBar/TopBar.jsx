import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import './TopBar.scss';
import { setNavAction } from '../../redux/app';

const propTypes = {
  navOpen: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
};

const defaultProps = {};

class TopBar extends Component {
  render() {
    const { navOpen, toggleNav } = this.props;
    return (
      <div className="TopBar">
        <button
          tabIndex={0}
          className="Button--hidden"
          onClick={() => toggleNav(!navOpen)}
        >
          <img
            alt="Logo"
            className="TopBar__logo"
            src={`${process.env.PUBLIC_URL}/img/logos/cc-logo.png`}
          />
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  navOpen: state.app.navOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleNav: navOpen => dispatch(setNavAction(navOpen)),
});

TopBar.propTypes = propTypes;
TopBar.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
