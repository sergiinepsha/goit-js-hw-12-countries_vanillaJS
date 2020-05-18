'use strict';

import processingRequest from '../processingRequest';

/*
 * starting handler clicking country
 */
export default function ({ target }) {
  processingRequest({ value: target.textContent });
}
