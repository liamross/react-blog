import { getJson } from './fetchApi';

const BLOG_ID = '6885048697536453133';
const API_KEY = 'AIzaSyAhXGSZuRD88JnGL51tT01nYhKPl5n38zc';

/**
 *
 * @param pageName
 * @param pageToken
 * @param pageNumber
 * @returns {Promise.<TResult>}
 */
export function getPosts(pageName, pageToken = '', pageNumber) {
  return getJson(
    'https://www.googleapis.com/blogger/v3/blogs/'
    + BLOG_ID + '/posts'
    + '?key=' + API_KEY
    + '&fields=items(title,content,replies,labels,id),nextPageToken'
    + '&labels=' + pageName
    + '&maxResults=10'
    + (pageToken ? '&pageToken=' + pageToken : ''),
  )
    .then(json => {
      json.page = pageNumber;
      return json;
    })
    .catch(reason => {
      throw reason;
    });
}
