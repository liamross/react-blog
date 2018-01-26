import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { PATH } from '../../utilities/routeUtils';

const propTypes = {
  pushPath: PropTypes.func.isRequired,
};

const defaultProps = {};

function PageNotFound({ pushPath }) {
  return (
    <ErrorPage
      errorPageMessage="Page Not Found"
      error={{
        status: 404,
      }}
      backButton={{
        title: 'Return to home',
        onClick: pushPath,
      }}
    />
  );
}

const mapStateToProps = (/*state*/) => ({});

const mapDispatchToProps = dispatch => ({
  pushPath: () => dispatch(push(`${PATH}/`)),
});

PageNotFound.propTypes = propTypes;
PageNotFound.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(PageNotFound);
