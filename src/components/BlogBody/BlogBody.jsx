import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPage } from '../../redux/posts';
import { BlogPost } from '../BlogPost/BlogPost';

import './BlogBody.scss';

const propTypes = {
  pageName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  getPosts: PropTypes.func.isRequired,
};

const defaultProps = {};

class BlogBody extends Component {
  componentWillMount() {
    this.props.getPosts(1);
  }

  render() {
    const { pageName, page, items, error, status, getPosts } = this.props;
    console.log(page, error, status, getPosts);
    return (
      <div className="BlogBody">
        <div className="BlogBody__content">
          {items && items.length > 0
            ? items.map(item => (
              <BlogPost
                key={item.id}
                title={item.title}
                content={item.content}
              />
              ))
            : `Some ${pageName} blogs are on the way. Check back soon!`
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    page: state.posts.page,
    items: state.posts.items,
    error: state.posts.error,
    status: state.posts.status,
  }
);

const mapDispatchToProps = (dispatch, props) => (
  {
    getPosts: pageNumber => dispatch(getPage(props.pageName, pageNumber)),
  }
);

BlogBody.propTypes = propTypes;
BlogBody.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(BlogBody);
