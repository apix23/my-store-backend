const { Client } = require('pg');

async function getConnectionToDatabes() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'my_store',
    user: 'nico',
    password: 'admin123',
  });

  await client.connect();
}

module.exports = { getConnectionToDatabes };
