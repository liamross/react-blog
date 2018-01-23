import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import './NavMenuItem.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  navOpen: PropTypes.bool.isRequired,
  isSubItem: PropTypes.bool,
  location: PropTypes.objectOf(PropTypes.string),
  pushPath: PropTypes.func.isRequired,
};

const defaultProps = {
  isSubItem: false,
  location: null,
};

function NavMenuItem({
  title,
  link,
  navOpen,
  isSubItem,
  location,
  pushPath,
}) {
  const isCurrent = location && location.pathname === link;
  const tabIndex = (!navOpen || isCurrent) ? -1 : 0;
  return (
    <a
      tabIndex={tabIndex}
      href={`${process.env.PUBLIC_URL}${link}`}
      onClick={(event) => {
        event.preventDefault();
        if (!isCurrent) {
          pushPath(link);
        }
      }}
      className={
        `NavMenuItem${
        (isSubItem ? ' NavMenuItem--subItem' : '')
        + (isCurrent ? ' NavMenuItem--current' : '')
          }`
      }
    >
      {title}
    </a>
  );
}

const mapStateToProps = state => ({
  location: state.router.location,
});

const mapDispatchToProps = dispatch => ({
  pushPath: (path) => {
    dispatch(push(path));
  },
});

NavMenuItem.propTypes = propTypes;
NavMenuItem.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(NavMenuItem);
