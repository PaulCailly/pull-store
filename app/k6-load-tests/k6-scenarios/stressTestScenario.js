import { k6Collection } from '../k6-requests/k6-collection.js';

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '20s', target: 10 },
    { duration: '10s', target: 20 },
    { duration: '20s', target: 20 },
    { duration: '10s', target: 30 },
    { duration: '20s', target: 30 },
    { duration: '10s', target: 40 },
    { duration: '20s', target: 40 },
    { duration: '10s', target: 50 },
    { duration: '20s', target: 50 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(99)<1500'],
  },
  ext: {
    loadimpact: {
      projectID: 3573445,
      // Test runs with the same name groups test runs together
      name: 'stressTest-sample',
    },
  },
};

export default function () {
  k6Collection();
}
