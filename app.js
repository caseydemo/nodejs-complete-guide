const express = require("express");
const app = express();
const bodyParser = require("body-parser");

/* third party library that parses body for us */
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  // first middleware
  next();
});

app.use((req, res, next) => {
  // second middleware
  next();
});

// default path for use() is "/"
app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title' /><button type='submit'>Add Product</button></form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

// default path for use() is "/"
app.use("/", (req, res, next) => {
  res.send("<h1>Muh butt itches</h1>");
});

app.listen(3000);
