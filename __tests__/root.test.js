const request = require('supertest');
const app = require('../server/app');
const Comments = require('../database/models');

describe('Accessing the database', () => {
  test('It should access the database and get the correct number of items', async () => {
    const response = await request(app).get('/api');
    Comments.count().then((result) => {
      expect(response.body.length).toBe(result);
    });
  });
});

afterAll(() => {
  Comments.sequelize.close();
});
