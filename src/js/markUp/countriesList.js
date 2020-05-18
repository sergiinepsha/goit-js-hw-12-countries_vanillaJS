'use strict';

import refs from '../refs';

/*
 * draw markup for list countries
 */
export default function (data) {
  refs.countriesList.insertAdjacentHTML('beforeend', createCountriesList(data));
}

/*
 * creating countries list
 */
function createCountriesList(data) {
  const countriesItems = data.map(country => `<li>${country.name}</li>`);
  return countriesItems.join('');
}
