const connection = require("../utils/connectDB");

const getTopMenuFromDB = async () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM `top_menu`", (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const getTopMenuById = async (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM `top_menu` WHERE `id` = ?",
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

module.exports = { getTopMenuFromDB, getTopMenuById };
