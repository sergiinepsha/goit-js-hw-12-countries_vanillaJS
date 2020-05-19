'use strict';
import errorPnotify from '../pnotify/error-pnotify';

export default function (query) {
  query.then(json => {
    if ('status' in json) {
      let message;
      switch (json.status) {
        case 404:
          message = 'You made an error in the request!';
          break;

        case 500:
          message = 'Server error!';
          break;
      }
      errorPnotify(`Error: ${json.status}! ${message}`);
    }
  });
}
