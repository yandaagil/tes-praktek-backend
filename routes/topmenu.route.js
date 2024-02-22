const Router = require("express");
const getTopMenus = require("../controllers/topmenu.controller");

const TopMenuRouter = Router();

TopMenuRouter.get("/", getTopMenus);
TopMenuRouter.get("/:id", getTopMenus);

module.exports = TopMenuRouter;
