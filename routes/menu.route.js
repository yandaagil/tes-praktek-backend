const Router = require("express");
const getMenus = require("../controllers/menu.controller");

const MenuRouter = Router();

MenuRouter.get("/", getMenus);
MenuRouter.get("/:id", getMenus);

module.exports = MenuRouter;
