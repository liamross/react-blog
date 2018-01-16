import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import './NavMenuItem.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
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
  isSubItem,
  location,
  pushPath,
}) {
  const isCurrent = location && location.pathname === link;
  return (
    <a
      tabIndex={isCurrent ? -1 : 0}
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
