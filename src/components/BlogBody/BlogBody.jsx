import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import { FetchStatus } from '../../utilities/reduxUtils';
import { getPageAction } from '../../redux/posts';

import { BlogPost } from '../BlogPost/BlogPost';
import { Loading } from '../Loading/Loading';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { PATH } from '../../utilities/routeUtils';

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
    this.returnToHome = this.returnToHome.bind(this);
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

  returnToHome() {
    const { pushPath } = this.props;
    pushPath(`${PATH}/`);
  }

  renderBlogBody() {
    const { pageName, items, error, postStatus } = this.props;
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
              title: 'Return to home',
              onClick: this.returnToHome,
            }}
          />
        );
      // case 'hi':
      case FetchStatus.Success:
        return (
          items && items.length > 0
            ? (
              <div className="BlogBody__content">
                {items.map(item => (
                  <BlogPost
                    key={item.id}
                    title={item.title}
                    content={item.content}
                  />
                ))
                }
              </div>
            )
            : (
              <ErrorPage
                errorPageMessage={`Some ${
                  pageName} blogs are on the way.`}
                backButton={{
                  title: 'Return to home',
                  onClick: this.returnToHome,
                }}
              />
            )
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

const mapStateToProps = state => (
  {
    page: state.posts.page,
    items: state.posts.items,
    error: state.posts.error,
    postStatus: state.posts.postStatus,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getPage: (pageName, pageNumber) => {
      dispatch(getPageAction(pageName, pageNumber));
    },
    pushPath: path => dispatch(push(path)),
  }
);

BlogBody.propTypes = propTypes;
BlogBody.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(BlogBody);
