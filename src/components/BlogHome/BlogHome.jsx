import React from 'react';
import { connect } from 'react-redux';
// import { push } from 'react-router-redux';
// import PropTypes from 'prop-types';
// import { PATH } from '../../utilities/routeUtils';

const propTypes = {
  // pushPath: PropTypes.func.isRequired,
};

const defaultProps = {};

function BlogHome(/*{ pushPath }*/) {
  return (
    <div className="SiteHome">
      {' '}
    </div>
  );
}

const mapStateToProps = (/*state*/) => ({});

const mapDispatchToProps = (/*dispatch*/) => ({
  // pushPath: path => dispatch(push(path)),
});

BlogHome.propTypes = propTypes;
BlogHome.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(BlogHome);
