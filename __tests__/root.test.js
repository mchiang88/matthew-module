const request = require('supertest');
const app = require('../server/app');
const connection = require('../database/');

describe('Test the rooth path', () => {
  test('It should respond to a GET request with a 200 status code', async () => {
    const response = await request(app).get('/api');
    expect(response.statusCode).toBe(200);
  });
});
