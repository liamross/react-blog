import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

// import './PageNotFound.scss';

const propTypes = {
  pushPath: PropTypes.func.isRequired,
};

const defaultProps = {};

function PageNotFound({ pushPath }) {
  return (
    <div className="PageNotFound">
      Page Not Found. <button onClick={() => pushPath('/')}>Go Home.</button>
    </div>
  );
}

const mapStateToProps = (/*state*/) => ({});

const mapDispatchToProps = dispatch => ({
  pushPath: path => dispatch(push(path)),
});

PageNotFound.propTypes = propTypes;
PageNotFound.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(PageNotFound);
