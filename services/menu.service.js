const connection = require("../utils/connectDB");

const getMenuFromDB = async () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM `menu`", (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const getMenuById = async (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM `menu` WHERE `id` = ?",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

module.exports = { getMenuFromDB, getMenuById };
