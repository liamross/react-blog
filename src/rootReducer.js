import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import posts from './redux/posts';

export default combineReducers({
  posts,
  router,
});
