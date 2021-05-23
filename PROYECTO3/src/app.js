const express = require('express');
const bodyParser = require('body-parser');
const app =  express ();


const userRouters = require('../app/routes/users');
const productsRouters = require('../app/routes/products');
const ordersRouters = require('../app/routes/orders');
const detailproductsRouters = require('../app/routes/detailproducts');
const loginRouters = require('../app/login');
app.use(bodyParser());


app.use(userRouters);
app.use(productsRouters);
app.use(ordersRouters);
app.use(detailproductsRouters);
app.use(loginRouters);



module.exports = app;