'use strict';

import refs from '../refs';
import countryTemplate from '../../templates/country.hbs';

/*
 * draw markup for country
 */
export default function (data) {
  refs.country.insertAdjacentHTML('beforeend', countryTemplate(data[0]));
}
