const Product = require('../models/product');

/* handles GET requests */
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Ding Dang Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true,
    });
};

/* handles form submissions */
exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

/* retrieves products for shop page */
exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true,
        });
    });
};
