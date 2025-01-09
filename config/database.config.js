const mysql2 = require("mysql2");
require("dotenv").config();

const connectionPool = mysql2.createPool({
  connectionLimit: 5,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

connectionPool.on("connection", function (connection) {
  console.log(
    "MySQL connection established with thread ID:",
    connection.threadId
  );
});

connectionPool.on("error", function (err) {
  console.error("MySQL connection pool error:", err);
});

module.exports = connectionPool;
