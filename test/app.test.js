const request = require('supertest');
const app = require('../app');

test('GET / should return message', async () => {
  const res = await request(app).get('/');
  expect(res.text).toBe('Hello DevOps from Node.js 🚀');
});
