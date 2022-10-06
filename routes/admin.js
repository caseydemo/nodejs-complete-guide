const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
const products = [];

/* form */
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Ding Dang Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

/* form action */
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title, pageTitle: '404 not found' });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
