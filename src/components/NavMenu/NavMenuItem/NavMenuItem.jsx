import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './NavMenuItem.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isSubItem: PropTypes.bool,
};

const defaultProps = {
  isSubItem: false,
};

function NavMenuItem({ isSubItem }) {
  return (
    <div className={`NavMenuItem${isSubItem ? ' NavMenuItem--subItem' : ''}`}>
      hi
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

NavMenuItem.propTypes = propTypes;
NavMenuItem.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(NavMenuItem);
