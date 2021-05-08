const express = require('express');


const app =  express ();

const port = 3004;

const userRouters = require('./app/routes/user');

app.use(userRouters);

app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`);
});