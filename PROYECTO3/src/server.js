const express = require ('express');

const app =  express ();

const port = 3004;

app.get('/', (req, res) => {
    res.send('Bienvenidos a mi nueva api de express');
});

app.listen(port, () =>{
    console.log(`servidor corriendo en el puerto ${port}`);
});