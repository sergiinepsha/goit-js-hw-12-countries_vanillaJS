'use strict';

import fetchCountries from './fetchCountries';
import errorPnotify from './pnotify/error-pnotify';
import noticePnotify from './pnotify/notice-pnotify';
import successPnotify from './pnotify/success-pnotify';
import clear from './clear';
import refs from './refs';
import createMarkUpCountriesList from './markUp/countriesList';
import createMarkUpCountry from './markUp/country';

/*
 * processing request
 */
export default function (target) {
  fetchCountries(target.value)
    .then(data => {
      clear();
      if (data.length > 10) {
        errorPnotify('Too many matches found. Please enter a more specific query!');
      }
      if (data.length >= 2 && data.length <= 10) {
        noticePnotify();
        createMarkUpCountriesList(data);
      }
      if (data.length === 1) {
        successPnotify();
        createMarkUpCountry(data);
        refs.input.value = data[0].name;
      }
    })
    .catch(error => {
      console.error(error);
    });
}
