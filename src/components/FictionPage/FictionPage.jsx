import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPage } from '../../redux/posts/actions';
import { PageName } from '../../utilities/postUtils';
import BlogPost from '../Common/BlogPost/BlogPost';

// import './FictionPage.scss';

const propTypes = {
  posts: PropTypes.object.isRequired,
  getPage: PropTypes.func.isRequired,
};

const defaultProps = {};

class FictionPage extends Component {
  componentWillMount() {
    this.props.getPage(1);
  }

  render() {
    return (
      <div className="FictionPage">
        {this.props.posts.items.map(item => (
          <BlogPost title={item.title} content={item.content} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    posts: state.posts,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    getPage: (pageNumber) => dispatch(getPage(PageName.Fiction, pageNumber)),
  }
);

FictionPage.propTypes = propTypes;
FictionPage.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(FictionPage);
