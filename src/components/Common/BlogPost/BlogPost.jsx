import React from 'react';
import PropTypes from 'prop-types';

// import './BlogPost.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const defaultProps = {};

function BlogPost({title, content}) {
  return (
    <div className="BlogPost">
      <div>
        <div>
          {title}
        </div>
        <div dangerouslySetInnerHTML={{__html: content}}/>
      </div>
    </div>
  );
}

BlogPost.propTypes = propTypes;
BlogPost.defaultProps = defaultProps;
export default BlogPost;
