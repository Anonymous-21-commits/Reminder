const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyparser = require("body-parser");
const schedule = require("./utils/job");
const connect = require("./config/db");
const setUpServer = () => {
  const app = express();
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use("/api", require("./routes/index"));
  app.listen(PORT, async () => {
    console.log("server started on PORT", PORT);
    await connect();
    console.log("mongodb connected");
    schedule();
  });
};
setUpServer();
