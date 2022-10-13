const path = require('path');
const express = require('express');
const productsController = require('../controllers/products');
const router = express.Router();

/* form */
router.get('/add-product', productsController.getAddProduct);

/* form action */
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
