import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import NavMenu from '../NavMenu/NavMenu';

import './TopBar.scss';

const propTypes = {
  pushHome: PropTypes.func.isRequired,
};

const defaultProps = {};

function TopBar({ pushHome }) {
  return (
    <div className="TopBar">
      <NavMenu />
      <a
        title="Home"
        href={`${process.env.PUBLIC_URL}/`}
        tabIndex={0}
        className="Anchor--hidden TopBar__logo"
        onClick={(event) => {
          event.preventDefault();
          pushHome();
        }}
      >
        <img
          alt="Logo"
          className="TopBar__logo__image"
          src={`${process.env.PUBLIC_URL}/img/logos/cc_logo-text.png`}
        />
      </a>
    </div>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  pushHome: () => dispatch(push('/react-blog')),
});

TopBar.propTypes = propTypes;
TopBar.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
