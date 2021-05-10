const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const authentication = require('./authentication');

const app =  express ();

const apiLimiterLogin = rateLimit({
    max: 1000
});

const port = 3004;

app.use(helmet());
app.use(bodyParser());
app.use('/', apiLimiterLogin);

const userRouters = require('../app/routes/users');
const productsRouters = require('../app/routes/products');
const detailProductsRouters = require('../app/routes/detailproducts');
const ordersRouters = require('../app/routes/orders');


app.use(userRouters);
app.use(productsRouters);
app.use(detailProductsRouters);
app.use(ordersRouters);


app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`);
});