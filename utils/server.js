const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("../routes");

const createServer = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(cors());
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Method", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
  });

  routes(app);

  return app;
};

module.exports = createServer;
