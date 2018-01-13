import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import app from './redux/app';
import posts from './redux/posts';

export default combineReducers({
  app,
  posts,
  router,
});
