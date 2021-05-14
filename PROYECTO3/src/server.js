const app = require('./app');

const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const authentication = require('./authentication');


//const actions = require('./database/actions/actions');




const apiLimiterLogin = rateLimit({
    max: 1000
});

const port = 3004;

app.use(helmet());



//app.use('/', apiLimiterLogin);


/*app.get('/', (req, res) => {
    res.send('Bienvenidos a mi api de express');
});*/

app.post('/login', async (req, res) => {
    var arg = req.body;
    var user = arg.user;
    var password = arg.password;
    const usuarios = await actions.get('SELECT * FROM users WHERE userName = :user AND password = :password', { user, password })
        if(usuarios.length > 0) {
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