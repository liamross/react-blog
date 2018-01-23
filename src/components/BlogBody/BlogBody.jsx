import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import { FetchStatus } from '../../utilities/reduxUtils';
import { getPageAction } from '../../redux/posts';

import { BlogPost } from '../BlogPost/BlogPost';
import { Loading } from '../Loading/Loading';
import { ErrorPage } from '../ErrorPage/ErrorPage';

import './BlogBody.scss';

const propTypes = {
  pageName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.objectOf(PropTypes.node).isRequired,
  postStatus: PropTypes.string.isRequired,
  getPage: PropTypes.func.isRequired,
  pushPath: PropTypes.func.isRequired,
};

const defaultProps = {};

class BlogBody extends PureComponent {
  constructor(props) {
    super(props);
    props.getPage(props.pageName, props.page);
    this.reloadPage = this.reloadPage.bind(this);
    this.returnToBlogs = this.returnToBlogs.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { pageName, getPage } = nextProps;
    const { pageName: oldPageName } = this.props;
    if (pageName !== oldPageName) {
      getPage(pageName, 1);
    }
  }

  reloadPage() {
    const { pageName, page, getPage } = this.props;
    getPage(pageName, page);
  }

  returnToBlogs() {
    const { pushPath } = this.props;
    pushPath('/react-blog/blogs');
  }

  renderBlogBody() {
    const { pageName, items, error, postStatus, pushPath } = this.props;
    switch (postStatus) {
      case FetchStatus.Loading:
      // case FetchStatus.Success:
        return <Loading message="Loading Posts" />;
      case FetchStatus.Error:
        return (
          <ErrorPage
            errorPageMessage="Error fetching posts."
            error={error}
            useErrorDetails
            reloadButton={{
              title: 'Try again',
              onClick: this.reloadPage,
            }}
            backButton={{
              title: 'Return to blogs',
              onClick: this.returnToBlogs,
            }}
          />
        );
      // case 'hi':
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
                  <button onClick={() => pushPath('/react-blog/blogs')}>
                    Go back to blogs home
                  </button>
                  <button onClick={() => pushPath('/react-blog')}>
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

const mapDispatchToProps = dispatch => ({
  getPage: (pageName, pageNumber) => {
    dispatch(getPageAction(pageName, pageNumber));
  },
  pushPath: path => dispatch(push(path)),
});

BlogBody.propTypes = propTypes;
BlogBody.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(BlogBody);
