const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

/* third party library that parses body for us */
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);

app.use((req, res, next) => {
  // first middleware
  next();
});

app.use((req, res, next) => {
  // second middleware
  next();
});


app.use(shopRoutes);


app.listen(3000);
