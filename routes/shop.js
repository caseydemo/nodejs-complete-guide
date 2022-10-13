const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const productsController = require('../controllers/products');
const router = express.Router();

// default path for use() is "/"
router.get('/', productsController.getProducts);

module.exports = router;
