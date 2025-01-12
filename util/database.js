const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "bank-backend",
    password: "Patch1289$"
});

module.exports = pool.promise();