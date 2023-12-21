const { faker } = require('@faker-js/faker');

const pool = require('../libs/postgres.pool');
class UsersService {
  constructor() {
    this.users = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error', (error) => {
      console.error('Unexpected error on idle client', error);
      process.exit(-1);
    });
  }

  generate() {
    const limit = 5;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.person.fullName(),
      });
    }
  }

  create(users) {
    this.users.push(users);
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const result = await this.pool.query(query);
    return result.rows;
  }

  findOne(id) {
    return this.users.find((item) => item.id === id);
  }

  update() {}

  delete() {}
}

module.exports = UsersService;
