/**
 * GET JSON from an API.
 * @param url
 * @param data
 * @param headers
 * @returns {Promise.<*>}
 */
export async function getJson(url, data, headers) {
  return await fetch(url, {
      method: 'GET',
      data: data ? data : undefined,
      cache: 'no-cache',
      headers: new Headers(headers ? headers : undefined),
    },
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw response;
      }
    })
    .catch(reason => {
      throw reason;
    });
}