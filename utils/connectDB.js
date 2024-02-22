const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: "3306",
  database: "tes_praktek",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database!");
});

module.exports = connection;
