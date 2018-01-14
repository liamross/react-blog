import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

// import './BlogsHome.scss';

const propTypes = {
  pushPath: PropTypes.func.isRequired,
};

const defaultProps = {};

function BlogsHome({ pushPath }) {
  return (
    <div className="BlogsHome">
      Select a blog <button onClick={() => pushPath('/')}>Go Home.</button>
      <button onClick={() => pushPath('/blogs/fiction')}>
        Go to fiction.
      </button>
      <button onClick={() => pushPath('/blogs/non-fiction')}>
        Go to non-fiction.
      </button>
      <button onClick={() => pushPath('/blogs/journalism')}>
        Go to journalism.
      </button>
    </div>
  );
}

const mapStateToProps = (/*state*/) => ({});

const mapDispatchToProps = dispatch => ({
  pushPath: path => dispatch(push(path)),
});

BlogsHome.propTypes = propTypes;
BlogsHome.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(BlogsHome);
