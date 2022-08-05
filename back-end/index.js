const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv");
const dbConfig = require("./src/config/dbConfig");
const userRoutes = require("./src/routes/user.routes");

const app = express();
const server = http.createServer(app);

dotenv.config();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH"],
  })
);

//data parser as json
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

dbConfig;
((...routes) => {
  routes.forEach((route) => {
    return app.use("/api/v1/", [route]);
  });
})(userRoutes);

const PORT = process.env.PORT;

server.listen(PORT, (error) => {
  if (error) {
    console.log(`Server error: ${error.message}`);
    return;
  } else {
    console.log(`Server listening on http://localhost:${PORT}`);
  }
});
