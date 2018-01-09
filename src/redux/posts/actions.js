export const GET_PAGE = 'posts/GET_PAGE';
export const GET_PAGE_PENDING = 'posts/GET_PAGE_PENDING';
export const GET_PAGE_SUCCESS = 'posts/GET_PAGE_SUCCESS';
export const GET_PAGE_FAILED = 'posts/GET_PAGE_FAILED';

export const getPage = (pageName, pageNumber) => ({
  type: GET_PAGE,
  pageName,
  pageNumber,
});

export const getPagePending = () => ({
  type: GET_PAGE_PENDING,
});

export const getPageSuccess = (payload) => ({
  type: GET_PAGE_SUCCESS,
  payload,
});

export const getPageFailed = (error) => ({
  type: GET_PAGE_FAILED,
  error,
});
