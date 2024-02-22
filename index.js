const createServer = require("./utils/server");

const app = createServer();
const port = process.env.PORT || 4000;

app.listen(port);
