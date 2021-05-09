const express = require('express');


const app =  express ();

const port = 3004;

const userRouters = require('./app/routes/user');
const itemsRouters = require('./app/routes/productos');

app.use(userRouters);
app.use(productosRouters);


app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`);
});