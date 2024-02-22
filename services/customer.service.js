const connection = require("../utils/connectDB");

const addCustomerToDB = async (
  name,
  level,
  favorite_menu,
  total_transaction
) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO `customer` (`name`, `level`, `favorite_menu`, `total_transaction`) VALUES (?, ?, ?, ?)",
      [name, level, favorite_menu, total_transaction],
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

const getCustomersFromDB = async () => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT `customer`.`id`, `customer`.`name`, `customer_level`.`level`, `menu`.`name` AS `favorite_menu`, `customer`.`total_transaction` FROM `customer` JOIN `customer_level` ON `customer`.`level` = `customer_level`.`id` JOIN `menu` ON `customer`.`favorite_menu` = `menu`.`id`",
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

const getCustomerById = async (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT `customer`.`id`, `customer`.`name`, `customer_level`.`level`, `menu`.`name` AS `favorite_menu`, `customer`.`total_transaction` FROM `customer` JOIN `customer_level` ON `customer`.`level` = `customer_level`.`id` JOIN `menu` ON `customer`.`favorite_menu` = `menu`.`id` WHERE `customer`.`id` = ?",
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

const updateCustomerById = async (
  id,
  name,
  level,
  favorite_menu,
  total_transaction
) => {
  return new Promise((resolve, reject) => {
    const updateFields = [];
    const updateValues = [];

    const addUpdateField = (field, value) => {
      if (value !== undefined) {
        updateFields.push(`\`${field}\` = ?`);
        updateValues.push(value);
      }
    };

    addUpdateField("name", name);
    addUpdateField("level", level);
    addUpdateField("favorite_menu", favorite_menu);
    addUpdateField("total_transaction", total_transaction);

    if (updateFields.length === 0) {
      reject(new Error("No fields provided for update"));
      return;
    }

    const query = `UPDATE \`customer\` SET ${updateFields.join(
      ", "
    )} WHERE \`id\` = ?`;

    connection.query(query, [...updateValues, id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const deleteCustomerById = async (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "DELETE FROM `customer` WHERE `id` = ?",
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

module.exports = {
  addCustomerToDB,
  getCustomersFromDB,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById,
};
