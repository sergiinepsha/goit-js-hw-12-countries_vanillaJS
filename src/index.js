'use strict';

import debounce from 'lodash.debounce';
import refs from './js/refs';
import handlerRequest from './js/handlers/request';
import handlerClearButton from './js/handlers/clearButton';
import handlerCountryClick from './js/handlers/countryClick';
import './css/styles.css';

/*
 * listening for input every 500ms
 */
refs.input.addEventListener(
  'input',
  debounce(({ target }) => handlerRequest(target), 500),
);

/*
 * listening to click of "Clear" button
 */
refs.clearButton.addEventListener('click', handlerClearButton);

/*
 * listening for click on list countries
 */
refs.countriesList.addEventListener('click', handlerCountryClick);
