const path = require('path');
const express = require("express");
const app = express();

app.set('view engine', 'pug');


const bodyParser = require("body-parser");

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


/* third party library that parses body for us */
app.use(bodyParser.urlencoded({ extended: false }));

/* add a filter to the adminData - '/admin' now only urls that start with '/admin/xxx' will be considered - like an if statement */
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(3000);
