const {
  getTopMenuFromDB,
  getTopMenuById,
} = require("../services/topmenu.service");

const getTopMenus = async (req, res) => {
  const {
    params: { id },
  } = req;

  if (id) {
    try {
      const topMenu = await getTopMenuById(id);
      console.info("Get top menu success");
      return res
        .status(200)
        .send({ status: true, statusCode: 200, data: topMenu });
    } catch (error) {
      console.error("Get top menu failed", error);
      return res.status(500).send({ status: false, statusCode: 500 });
    }
  } else {
    try {
      const topMenu = await getTopMenuFromDB();
      console.info("Get top menu success");
      return res
        .status(200)
        .send({ status: true, statusCode: 200, data: topMenu });
    } catch (error) {
      console.error("Get top menu failed", error);
      return res.status(500).send({ status: false, statusCode: 500 });
    }
  }
};

module.exports = getTopMenus;
