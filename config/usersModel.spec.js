const db = require('../database/dbConfig.js');

const Users = require('./users-model.js');

describe('users model', () => {
  beforeEach(async () => {
    await db('users').truncate();
  });

  describe('insert()', () => {
    it('should insert the user into the db', async () => {
      await Users.add({ username: 'gaffer', password: "pass" }); // using the api

      const users = await db('users'); // directly looking into db

      expect(users).toHaveLength(1);
    });

    it('should insert the user into the db', async () => {
      await Users.add({ username: 'ron', password: "pass" }); // using the api
      await Users.add({ username: 'john', password: "pass" }); // using the api

      const users = await db('users'); // directly looking into db

      expect(users).toHaveLength(2);
    });
  });
});