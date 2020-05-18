'use strict';

import refs from './refs';

/*
 * clear all markup
 */
export default function () {
  if (refs.countriesList.children.length > 0) {
    clearCountriesList();
  }
  if (refs.country.children.length > 0) {
    clearCountry();
  }
}

/*
 * clear markup for countries list
 */
function clearCountriesList() {
  refs.countriesList.innerHTML = '';
}

/*
 * clear markup for country
 */
function clearCountry() {
  refs.country.innerHTML = '';
}
