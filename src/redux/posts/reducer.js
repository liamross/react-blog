import { fetchPostsByPage } from '../api/posts';
import { FetchStatus } from '../../utilities/reduxUtils';
import { GET_PAGE_FAILED, GET_PAGE_PENDING, GET_PAGE_SUCCESS } from './actions';

const defaultState = {
  page: 1,
  posts: [],
  error: '',
  status: FetchStatus.Loading,
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case GET_PAGE_PENDING:
      return {
        ...state,
        error: '',
        status: FetchStatus.Loading,
      };
    case GET_PAGE_SUCCESS:
      return {
        ...state,
        posts: action.result,
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
}