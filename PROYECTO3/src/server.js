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




const userRouters = require('../app/routes/user');
const productosRouters = require('../app/routes/productos');

app.use(userRouters);
app.use(productosRouters);


app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`);
});