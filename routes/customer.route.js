const Router = require("express");
const {
  createCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customer.controller");

const CustomerRouter = Router();

CustomerRouter.get("/", getCustomers);
CustomerRouter.get("/:id", getCustomers);
CustomerRouter.post("/", createCustomer);
CustomerRouter.put("/:id", updateCustomer);
CustomerRouter.delete("/:id", deleteCustomer);

module.exports = CustomerRouter;
