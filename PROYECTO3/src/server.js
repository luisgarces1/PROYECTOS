const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const authentication = require('./authentication');
//const actions = require('./database/actions/actions');



const userRouters = require('../app/routes/users');
const productsRouters = require('../app/routes/products');
const detailProductsRouters = require('../app/routes/detailproducts');
const ordersRouters = require('../app/routes/orders');



const app =  express ();

const apiLimiterLogin = rateLimit({
    max: 1000
});

const port = 3004;

app.use(helmet());
app.use(bodyParser());
app.use('/', apiLimiterLogin);

app.use(userRouters);
app.use(productsRouters);
app.use(detailProductsRouters);
app.use(ordersRouters);

app.get('/', (req, res) => {
    res.send('Bienvenidos a mi api de express');
});

app.post('/login', async (req, res) => {
    var arg = req.body;
    var user = arg.user;
    var password = arg.password;
    const usuarios = await actions.get('SELECT * FROM users WHERE userName = :user AND password = :password', { user, password })
    var isAutenticated = usuarios.filter(userf => userf.userName === user && userf.password === password);
    if(isAutenticated.length > 0) {
        var data = { user, password };
        var token = authentication.generateToken(data);
        res.send({
            result: 'OK',
            token
        });
    }else {
        res.send({
            result: 'ERROR'
        });
    }
});











app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`);
});