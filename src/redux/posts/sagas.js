import { select, call, put } from 'redux-saga/effects';
import { getPosts } from '../../api/posts';
import { getPagePending, getPageSuccess, getPageFailed } from './actions';

export function* getPageSaga(action) {
  try {
    yield put(getPagePending());
    const pageTokens = yield select(state => state.posts.pageTokens);
    const args = [
      action.pageName,
      pageTokens[action.pageNumber - 2],
      action.pageNumber,
    ];
    const posts = yield call(getPosts, ...args);
    yield put(getPageSuccess(posts));
  } catch (error) {
    yield put(getPageFailed(error));
  }
}