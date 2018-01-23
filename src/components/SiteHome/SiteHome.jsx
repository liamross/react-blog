import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

// import './SiteHome.scss';

const propTypes = {
  pushPath: PropTypes.func.isRequired,
};

const defaultProps = {};

function SiteHome({ pushPath }) {
  return (
    <div className="SiteHome">
      Site Home
      <button onClick={() => pushPath('/react-blog/invalid')}>
        Go to invalid page.
      </button>
    </div>
  );
}

const mapStateToProps = (/*state*/) => ({});

const mapDispatchToProps = dispatch => ({
  pushPath: path => dispatch(push(path)),
});

SiteHome.propTypes = propTypes;
SiteHome.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(SiteHome);
