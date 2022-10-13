const express = require('express');
const app = express();

/* use path library in app */
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

/* use ejs view engine in app */
app.set('view engine', 'ejs');

/* use body-parser in app */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

/* routes */
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

/* error controller - default */
const errorController = require('./controllers/error');

/* add a filter to the adminData - '/admin' now only urls that start with '/admin/xxx' will be considered - like an if statement */
app.use('/admin', adminRoutes);
app.use(shopRoutes);

/* default route */
app.use('/', errorController.get404);

/* set app to listen on port 3000 */
app.listen(3000);