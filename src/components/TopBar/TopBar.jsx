import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import './TopBar.scss';

const propTypes = {
  pushHome: PropTypes.func.isRequired,
};

const defaultProps = {};

function TopBar({ pushHome }) {
  return (
    <div className="TopBar">
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

const mapStateToProps = (/*state*/) => ({});

const mapDispatchToProps = dispatch => ({
  pushHome: () => dispatch(push('/')),
});

TopBar.propTypes = propTypes;
TopBar.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
