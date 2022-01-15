const mysql = require("mysql2/promise");

// Create connection and connect to host
const connect = async () => {
  try {
    // Connect to the mySQL cluster
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });
    console.log("MySQL is connected");
    return conn;
  } catch (e) {
    throw new Error(`Coonection error: ${e.message}`);
  }
};

module.exports = connect;
