import { k6Collection } from '../k6-requests/k6-collection.js';

export const options = {
  stages: [
    { duration: '10s', target: 100 },
    { duration: '20s', target: 100 },
    { duration: '10s', target: 200 },
    { duration: '20s', target: 200 },
    { duration: '10s', target: 300 },
    { duration: '20s', target: 300 },
    { duration: '10s', target: 400 },
    { duration: '20s', target: 400 },
    { duration: '10s', target: 520 },
    { duration: '20s', target: 520 },
    { duration: '1m', target: 0 }, // This scenario makes the API crash
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
