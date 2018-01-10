import { combineReducers } from 'redux';
import posts from './redux/posts/reducer';
import { routerReducer as router } from 'react-router-redux';

export default combineReducers({
  posts,
  router,
});