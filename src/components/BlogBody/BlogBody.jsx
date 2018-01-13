import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPageAction } from '../../redux/posts';
import { BlogPost } from '../BlogPost/BlogPost';

import './BlogBody.scss';

const propTypes = {
  pageName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  getPage: PropTypes.func.isRequired,
};

const defaultProps = {};

class BlogBody extends Component {
  componentWillMount() {
    this.props.getPage(1);
  }

  render() {
    const { pageName, page, items, error, status, getPage } = this.props;
    console.log(page, error, status, getPage);
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

const mapStateToProps = state => ({
  page: state.posts.page,
  items: state.posts.items,
  error: state.posts.error,
  status: state.posts.status,
});

const mapDispatchToProps = (dispatch, props) => ({
  getPage: pageNumber => dispatch(getPageAction(props.pageName, pageNumber)),
});

BlogBody.propTypes = propTypes;
BlogBody.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(BlogBody);
