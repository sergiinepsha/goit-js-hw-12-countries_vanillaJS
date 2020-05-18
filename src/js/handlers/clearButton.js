'use strict';

import clear from '../clear';
import refs from '../refs';

/*
 * starting handler clicking "Clear" button
 */
export default function () {
  refs.input.value = '';
  clear();
}
