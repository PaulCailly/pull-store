import { k6Collection } from '../k6-requests/k6-collection.js';

export const options = {
  vus: 1,
  duration: '1m',
  thresholds: {
    http_req_duration: ['p(99)<1500'],
  },
  ext: {
    loadimpact: {
      projectID: 3573445,
      // Test runs with the same name groups test runs together
      name: 'smokeTest-sample',
    },
  },
};

export default function () {
  k6Collection();
}
