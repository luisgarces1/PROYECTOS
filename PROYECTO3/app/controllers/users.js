/*exports.getData = (req, res) => {
    res.send({ data: 'esto viene desde RUTA' });
};*/

const { post } = require("../routes/users");


exports.getData = (req, res) => {
    const userverified = authentication.verifyUser(req, res, usuarios);
    if (userverified) {
        res.send(usuarios);
    } else {
        res.send('Error: ha ocurrido un problema con el token');
    }
    };




exports.getData = (req, res) => {
    console.log (req.body)
    res.status(200).send({mensaje:'no se que es'});
};

/*exports.postData = (req, res) => {
    res.send({});
};

exports.deleteData = (req, res) => {
    res.send({});
};*/