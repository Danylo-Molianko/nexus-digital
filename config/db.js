const { Pool } = require('pg');
const fs = require('fs');

let pool;

function connectDB() {
  if (pool) return pool;

  const ssl =
    process.env.DB_SSL === 'require'
      ? {
          ca: fs.readFileSync(process.env.DB_SSL_CA_PATH, 'utf8'),
          rejectUnauthorized: true,
        }
      : false;

  pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 5432),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
  });

  pool.on('error', (err) => {
    console.error('Postgres pool error:', err);
    process.exit(1);
  });

  return pool;
}

async function healthCheck() {
  const p = connectDB();
  await p.query('select 1');
  return true;
}

module.exports = { connectDB, healthCheck, getPool: () => pool };
module.exports = { connectDB, healthCheck, getPool: () => pool };
