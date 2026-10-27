console.log("ENV LOADED:", require("./env"));
const mysql = require("mysql2/promise");
const env = require("./env");

const pool = mysql.createPool({
  host: env.db.host,
  port: env.db.port,
  user: env.db.user,
  password: env.db.password,
  database: env.db.database,
  waitForConnections: true,
  connectionLimit: 10,
});

const connectDatabase = async () => {
  if (!env.db.host || !env.db.user || !env.db.database) {
    throw new Error("Database settings are missing in the .env file");
  }

  try {
    const connection = await pool.getConnection();
    console.log("MySQL connected successfully");
    connection.release();
  } catch (error) {
    console.error("MySQL connection failed:", error.message);
    throw error;
  }
};

module.exports = { pool, connectDatabase };