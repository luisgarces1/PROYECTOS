const express = require('express');
const bodyParser = require('body-parser');
const app =  express ();
app.use(bodyParser());
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const swaggerDefinition = require('./swagger');

const options = {

    ...swaggerDefinition,
    apis: ['./app/routes/*.js']
}

const swaggerSpec = swaggerJsDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))



const userRouters = require('../app/routes/users');
const productsRouters = require('../app/routes/products');
const ordersRouters = require('../app/routes/orders');
const detailproductsRouters = require('../app/routes/detailproducts');

app.use(userRouters);
app.use(productsRouters);
app.use(ordersRouters);
app.use(detailproductsRouters);

module.exports = app;