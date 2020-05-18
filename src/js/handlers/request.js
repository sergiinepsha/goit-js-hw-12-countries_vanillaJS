'use strict';

import processingRequest from '../processingRequest';
import clear from '../clear';

/*
 * starting query handler from input
 */
export default function (target) {
  target.value != '' ? processingRequest(target) : clear();
}
