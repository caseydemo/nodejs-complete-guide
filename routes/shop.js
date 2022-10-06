const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
const adminData = require('./admin');

// default path for use() is "/"
router.get('/', (req, res, next) => {
  const products = adminData.products;
  console.log('after defining products', products);
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
