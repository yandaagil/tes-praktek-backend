const HealthRouter = require("./health.route");
const CustomerRouter = require("./customer.route");
const TopMenuRouter = require("./topmenu.route");
const MenuRouter = require("./menu.route");

const _routes = [
  ["/health", HealthRouter],
  ["/customer", CustomerRouter],
  ["/topmenu", TopMenuRouter],
  ["/menu", MenuRouter],
];

const routes = (app) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};

module.exports = routes;
