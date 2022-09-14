const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoutes = require('./routes/404');

/* third party library that parses body for us */
app.use(bodyParser.urlencoded({ extended: false }));

/* add a filter to the adminRoutes - '/admin' now only urls that start with '/admin/xxx' will be considered - like an if statement */
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorRoutes);


app.listen(3000);
