import { all, fork, takeLatest } from 'redux-saga/effects';

import { GET_PAGE, getPageSaga } from './redux/posts';

export default function* sagas() {
  yield all([
    fork(takeLatest, GET_PAGE, getPageSaga),
  ]);
}
