const { getMenuFromDB, getMenuById } = require("../services/menu.service");

const getMenus = async (req, res) => {
  const {
    params: { id },
  } = req;

  if (id) {
    try {
      const menu = await getMenuById(id);
      console.info("Get menu success");
      return res
        .status(200)
        .send({ status: true, statusCode: 200, data: menu });
    } catch (error) {
      console.error("Get menu failed", error);
      return res.status(500).send({ status: false, statusCode: 500 });
    }
  } else {
    try {
      const menu = await getMenuFromDB();
      console.info("Get menu success");
      return res
        .status(200)
        .send({ status: true, statusCode: 200, data: menu });
    } catch (error) {
      console.error("Get menu failed", error);
      return res.status(500).send({ status: false, statusCode: 500 });
    }
  }
};

module.exports = getMenus;
