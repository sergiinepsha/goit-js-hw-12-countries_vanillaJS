'use strict';

const baseUrl = 'https://restcountries.eu/rest/v2/name/';

export default function (searchQuery) {
  return fetch(baseUrl + searchQuery).then(responce => responce.json());
}
