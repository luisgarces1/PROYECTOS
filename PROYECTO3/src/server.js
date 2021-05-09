const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const authentication = require('./authentication');


const apiLimiterLogin = rateLimit({
    max: 1000
});

const port = 3004;

const app =  express ();



const userRouters = require('../app/routes/user');
const productosRouters = require('../app/routes/products');
const detailProductsRouters = require('../app/routes/detailproducts');



app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`);
});