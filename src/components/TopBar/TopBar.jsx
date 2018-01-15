import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import { toggleNavAction } from '../../redux/app';

import './TopBar.scss';

const propTypes = {
  navOpen: PropTypes.bool.isRequired,
  pushHome: PropTypes.func.isRequired,
  toggleNav: PropTypes.func.isRequired,
};

const defaultProps = {};

function TopBar({ navOpen, pushHome, toggleNav }) {
  return (
    <div className="TopBar">
      <button
        title={`${navOpen ? 'Close' : 'Open'} Menu`}
        className={
          `Button--hidden TopBarNavButton ${
            navOpen ? 'TopBarNavButton--open' : ''
            }`
        }
        tabIndex={0}
        onClick={toggleNav}
      >
        <div className="TopBarNavButton__menu">☰</div>
        <div className="TopBarNavButton__close">×</div>
      </button>
      <button
        title="Home"
        tabIndex={0}
        className="Button--hidden"
        onClick={pushHome}
      >
        <img
          alt="Logo"
          className="TopBar__logo"
          src={`${process.env.PUBLIC_URL}/img/logos/cc_logo-text.png`}
        />
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  navOpen: state.app.navOpen,
});

const mapDispatchToProps = dispatch => ({
  pushHome: () => dispatch(push('/')),
  toggleNav: () => dispatch(toggleNavAction()),
});

TopBar.propTypes = propTypes;
TopBar.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
