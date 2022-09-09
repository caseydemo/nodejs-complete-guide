const http = require("http");
const express = require("express");
const app = express();

// default path for use() is "/"
app.use("/add-product", (req, res, next) => {
  res.send("<h1>Muh butt itches - with a product</h1>");
});

// default path for use() is "/"
app.use("/", (req, res, next) => {
  console.log("in the SECOND middle ware lol");
  res.send("<h1>Muh butt itches</h1>");
});

const server = http.createServer(app);
server.listen(3000);
