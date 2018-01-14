import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import { FetchStatus } from '../../utilities/reduxUtils';
import { getPageAction } from '../../redux/posts';

import { BlogPost } from '../BlogPost/BlogPost';
import { Loading } from '../Loading/Loading';

import './BlogBody.scss';

const propTypes = {
  pageName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string.isRequired,
  postStatus: PropTypes.number.isRequired,
  getPage: PropTypes.func.isRequired,
  pushPath: PropTypes.func.isRequired,
};

const defaultProps = {};

class BlogBody extends Component {
  componentWillMount() {
    this.props.getPage(1);
  }

  renderBlogBody() {
    const {
      pageName,
      page,
      items,
      error,
      postStatus,
      getPage,
      pushPath,
    } = this.props;
    console.log(!!(page && error && postStatus && getPage));

    switch (postStatus) {
      case FetchStatus.Loading:
        return <Loading message="Loading Posts" />;
      case FetchStatus.Error:
        return <div>Error: {JSON.stringify(error)}</div>;
      case FetchStatus.Success:
        return (
          <div className="BlogBody__content">
            {items && items.length > 0
              ? items.map(item => (
                <BlogPost
                  key={item.id}
                  title={item.title}
                  content={item.content}
                />
              ))
              : (
                <div>
                  Some {pageName} blogs are on the way. Check back soon!
                  <button onClick={() => pushPath('/blogs')}>
                    Go back to blogs home
                  </button>
                  <button onClick={() => pushPath('/')}>
                    Go back to home
                  </button>
                </div>
              )
            }
          </div>
        );
      default:
        return <div>Error...</div>;
    }
  }

  render() {
    return (
      <div className="BlogBody">
        {this.renderBlogBody()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.posts.page,
  items: state.posts.items,
  error: state.posts.error,
  postStatus: state.posts.postStatus,
});

const mapDispatchToProps = (dispatch, props) => ({
  getPage: pageNumber => dispatch(getPageAction(props.pageName, pageNumber)),
  pushPath: path => dispatch(push(path)),
});

BlogBody.propTypes = propTypes;
BlogBody.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(BlogBody);
