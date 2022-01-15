const mysql = require("mysql2/promise");
require('dotenv').config();
// Create connection and connect to host
const connect = async () => {
  try {
    // Connect to the mySQL cluster
    const conn = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER_ADMIN,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });
    console.log("MySQL is connected");
    return conn;
  } catch (e) {
    throw new Error(`Coonection error: ${e.message}`);
  }
};

module.exports = connect;