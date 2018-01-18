import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import FocusLock from 'react-focus-lock';

import { setNavAction, toggleNavAction } from '../../redux/app';
import { PageName } from '../../utilities/postUtils';
import NavMenuItem from './NavMenuItem/NavMenuItem';

import './NavMenu.scss';

const propTypes = {
  navOpen: PropTypes.bool.isRequired,
  setNav: PropTypes.func.isRequired,
  toggleNav: PropTypes.func.isRequired,
};

const defaultProps = {};

const links = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Blogs',
    link: '/blogs',
  },
  {
    title: 'Fiction',
    link: `/blogs/${PageName.Fiction}`,
    isSubItem: true,
  },
  {
    title: 'Non-fiction',
    link: `/blogs/${PageName.NonFiction}`,
    isSubItem: true,
  },
  {
    title: 'Journalism',
    link: `/blogs/${PageName.Journalism}`,
    isSubItem: true,
  },
];

class NavMenu extends PureComponent {
  constructor() {
    super();

    this.onKeyDown = this.onKeyDown.bind(this);
    this.hideNavMenu = this.hideNavMenu.bind(this);
  }

  onKeyDown(evt) {
    if (keycode(evt.keyCode) === 'esc') {
      this.hideNavMenu();
    }
  }

  hideNavMenu() {
    const { navOpen, setNav } = this.props;
    if (navOpen) {
      setNav(false);
    }
  }

  render() {
    const { navOpen, toggleNav } = this.props;
    return (
      <FocusLock
        disabled={!navOpen}
      >
        <button
          className={
            `Button--hidden TopBarNavButton ${
            navOpen ? 'TopBarNavButton--open' : ''
            }`
          }
          tabIndex={0}
          onClick={toggleNav}
          onKeyDown={this.onKeyDown}
        >
          <div className="TopBarNavButton__menu">☰</div>
          <div className="TopBarNavButton__close">×</div>
        </button>
        <aside
          role="Menu"
          onClick={this.hideNavMenu}
          className={`NavMenu${navOpen ? ' NavMenu--visible' : ''}`}
          onKeyDown={this.onKeyDown}
        >
          <nav
            className="NavMenu__container"
            onClick={e => e.stopPropagation()}
          >
            <div className="NavMenu__focus">
              {links.map(link => (
                <NavMenuItem
                  key={link.title}
                  navOpen={navOpen}
                  {...link}
                />
              ))}
            </div>
          </nav>
        </aside>
      </FocusLock>
    );
  }
}

const mapStateToProps = state => ({
  navOpen: state.app.navOpen,
});

const mapDispatchToProps = dispatch => ({
  setNav: navOpen => dispatch(setNavAction(navOpen)),
  toggleNav: () => dispatch(toggleNavAction()),
});

NavMenu.propTypes = propTypes;
NavMenu.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
