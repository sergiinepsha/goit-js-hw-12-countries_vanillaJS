'use strict';

import { success } from '@pnotify/core';

export default function () {
  success({
    title: 'Ok!',
    text: 'You found country!',
  });
}
