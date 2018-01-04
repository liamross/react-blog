import { all, fork, takeLatest, takeEvery } from 'redux-saga/effects';

import { GET_PAGE } from './redux/posts/actions';
import { getPageSaga } from './redux/posts/sagas';

export default function* sagas() {
  yield all([
    fork(
      takeLatest,
      GET_PAGE,
      getPageSaga,
    ),
  ]);
}