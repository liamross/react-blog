import { select, call, put } from 'redux-saga/effects';
import { getPosts } from '../api/posts';
import { FetchStatus } from '../utilities/reduxUtils';

/* ACTIONS */

export const GET_PAGE = 'posts/GET_PAGE';
const GET_PAGE_PENDING = 'posts/GET_PAGE_PENDING';
const GET_PAGE_SUCCESS = 'posts/GET_PAGE_SUCCESS';
const GET_PAGE_FAILED = 'posts/GET_PAGE_FAILED';


export const getPageAction = (pageName, pageNumber) => ({
  type: GET_PAGE,
  pageName,
  pageNumber,
});

const getPagePending = () => ({
  type: GET_PAGE_PENDING,
});

const getPageSuccess = payload => ({
  type: GET_PAGE_SUCCESS,
  payload,
});

const getPageFailed = error => ({
  type: GET_PAGE_FAILED,
  error,
});

const defaultState = {
  page: 1,
  pageTokens: {},
  items: [],
  error: '',
  status: FetchStatus.Loading,
  currentBlog: '',
  comments: {},
};

/* REDUCER */

/**
 * REDUCER: Modifies the state.
 * @param {Object} state - The old state.
 * @param {Object} action - The action to apply to state.
 * @returns {Object} - Returns the new state.
 */
export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_PAGE_PENDING:
      return {
        ...state,
        error: '',
        status: FetchStatus.Loading,
      };
    case GET_PAGE_SUCCESS:
      return {
        ...state,
        page: action.payload.page,
        pageTokens: {
          ...state.pageTokens,
          [action.payload.page + 1]: action.payload.nextPageToken,
        },
        items: action.payload.items || [],
        error: '',
        status: FetchStatus.Success,
      };
    case GET_PAGE_FAILED:
      return {
        ...state,
        error: action.error,
        status: FetchStatus.Error,
      };
    default:
      return state;
  }
};

/* SAGAS */

/**
 * SAGA: Fetches a page of posts and inserts them into the state.
 * @param {Object} action - The getPageAction action.
 * @param {string} action.pageName - The name of the page to fetch results from.
 * @param {number} action.pageNumber - The page number to fetch.
 */
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
