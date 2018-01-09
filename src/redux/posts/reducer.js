import { FetchStatus } from '../../utilities/reduxUtils';
import { GET_PAGE_FAILED, GET_PAGE_PENDING, GET_PAGE_SUCCESS } from './actions';
import { PageName } from '../../utilities/postUtils';

const defaultState = {
  page: 1,
  currentPage: PageName.Fiction,
  pageTokens: {},
  items: [],
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
        page: action.payload.page,
        pageTokens: {
          ...state.pageTokens,
          [action.payload.page + 1]: action.payload.nextPageToken,
        },
        items: action.payload.items,
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