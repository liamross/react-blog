/**
 * GET JSON from an API.
 * @param url
 * @param data
 * @param headers
 * @returns {Promise.<*>}
 */
export async function getJson(url, data, headers) {
  return fetch(url, {
    method: 'GET',
    data: data || undefined,
    cache: 'no-cache',
    headers: new Headers(headers || undefined),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .catch((reason) => {
      throw reason;
    });
}
