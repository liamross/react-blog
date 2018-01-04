import { call, put } from 'redux-saga/effects';

export function* getPageSaga(action) {
  try {
    yield put(requestPending('fetchStatus'));
    const pantryItems = yield call(fetchPantryItemsAPI, action.userId);
    yield put(fetchPantryItemsSuccess(pantryItems));
  } catch (error) {
    yield put(fetchPantryItemsFailure(error));
  }
}