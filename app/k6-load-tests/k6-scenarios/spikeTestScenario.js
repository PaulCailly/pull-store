import { k6Collection } from '../k6-requests/k6-collection.js';

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '45s', target: 10 },
    { duration: '10s', target: 50 },
    { duration: '45s', target: 50 },
    { duration: '10s', target: 10 },
    { duration: '45s', target: 10 },
    { duration: '15s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(99)<1500'],
  },
  ext: {
    loadimpact: {
      projectID: 3573445,
      // Test runs with the same name groups test runs together
      name: 'spikeTest-sample',
    },
  },
};

export default function () {
  k6Collection();
}
