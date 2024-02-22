const {
  addCustomerToDB,
  getCustomersFromDB,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById,
} = require("../services/customer.service");

const createCustomer = async (req, res) => {
  const {
    body: { name, level, favorite_menu, total_transaction },
  } = req;

  try {
    await addCustomerToDB(name, level, favorite_menu, total_transaction);
    console.info("Create customer success");
    return res.status(201).send({ status: true, statusCode: 201 });
  } catch (error) {
    console.error("Create customer failed", error);
    return res.status(500).send({ status: false, statusCode: 500 });
  }
};

const getCustomers = async (req, res) => {
  const {
    params: { id },
  } = req;

  if (id) {
    try {
      const customer = await getCustomerById(id);
      console.info("Get customer success");
      return res
        .status(200)
        .send({ status: true, statusCode: 200, data: customer });
    } catch (error) {
      console.error("Get customer failed", error);
      return res.status(500).send({ status: false, statusCode: 500 });
    }
  } else {
    try {
      const customers = await getCustomersFromDB();
      console.info("Get customers success");
      return res
        .status(200)
        .send({ status: true, statusCode: 200, data: customers });
    } catch (error) {
      console.error("Get customers failed", error);
      return res.status(500).send({ status: false, statusCode: 500 });
    }
  }
};

const updateCustomer = async (req, res) => {
  const {
    params: { id },
    body: { name, level, favorite_menu, total_transaction },
  } = req;

  try {
    await updateCustomerById(id, name, level, favorite_menu, total_transaction);
    console.info("Update customer success");
    return res.status(200).send({ status: true, statusCode: 200 });
  } catch (error) {
    console.error("Update customer failed", error);
    return res.status(500).send({ status: false, statusCode: 500 });
  }
};

const deleteCustomer = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    await deleteCustomerById(id);
    console.info("Delete customer success");
    return res.status(200).send({ status: true, statusCode: 200 });
  } catch (error) {
    console.error("Delete customer failed", error);
    return res.status(500).send({ status: false, statusCode: 500 });
  }
};

module.exports = {
  createCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer,
};
