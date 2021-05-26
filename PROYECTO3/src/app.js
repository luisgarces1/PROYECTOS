const express = require('express');
const bodyParser = require('body-parser');
const app =  express ();


const userRouters = require('../app/users');



const loginRouters = require('../app/login');
app.use(bodyParser());


app.use(userRouters);



app.use(loginRouters);



module.exports = app;