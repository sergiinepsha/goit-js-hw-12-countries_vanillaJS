'use strict';

import checkingRequestError from '../js/exceptions/requestError';

const baseUrl = 'https://restcountries.eu/rest/v2/name/';

export default function (searchQuery) {
  const query = fetch(baseUrl + searchQuery).then(responce => responce.json());
  checkingRequestError(query);
  return query;
}
