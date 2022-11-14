import Sequelize from "sequelize";

const db = new Sequelize(
  process.env.PG_DB,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: "postgres",
    pool: {
      idleTimeoutMillis: 10000,
      min: 0, // parseInt(process.env.MIN_CONN_POOL_SIZE, 10),
      max: 5, //  parseInt(process.env.MAX_CONN_POOL_SIZE, 10),
      acquire: 30000,
      evict: 10000,
    },
    define: {
      timestamp: false,
      freezeTableName: true,
    },
    // logging: false
  }
);

export default db;
