const express = require('express');

const app =  express ();

module.exports = app

const userRouters = require('../app/routes/users');
const productsRouters = require('../app/routes/products');
const ordersRouters = require('../app/routes/orders');
const detailproductsRouters = require('../app/routes/detailproducts');

app.use(userRouters);
app.use(productsRouters);
app.use(ordersRouters);
app.use(detailproductsRouters);