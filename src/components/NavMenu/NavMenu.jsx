import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import keycode from 'keycode';

import { setNavAction } from '../../redux/app';

import './NavMenu.scss';

const propTypes = {
  navOpen: PropTypes.bool.isRequired,
  setNav: PropTypes.func.isRequired,
};

const defaultProps = {};

class NavMenu extends PureComponent {
  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
    this.hideNavMenu = this.hideNavMenu.bind(this);
  }

  onKeyDown(evt) {
    console.log('keydown', evt.keyCode);
    if (keycode(evt.keyCode) === 'esc') {
      this.hideNavMenu();
    }
  }

  hideNavMenu() {
    const { setNav } = this.props;
    setNav(false);
  }

  render() {
    const { navOpen } = this.props;
    return (
      <aside
        role="Menu"
        onClick={this.hideNavMenu}
        onKeyDown={this.onKeyPress}
        className={`NavMenu${navOpen ? ' NavMenu--visible' : ''}`}
      >
        <nav
          onKeyDown={this.onKeyPress}
          className="NavMenu__container"
          onClick={e => e.stopPropagation()}
        >
          sideNav
        </nav>
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  navOpen: state.app.navOpen,
});

const mapDispatchToProps = dispatch => ({
  setNav: navOpen => dispatch(setNavAction(navOpen)),
});

NavMenu.propTypes = propTypes;
NavMenu.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
