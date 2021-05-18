/*exports.getData = (req, res) => {
    res.send({ data: 'esto viene desde RUTA' });
};*/

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
    res.status(200).send({mensaje:'ahi voy'});
};

exports.getData = (req, res) => {
    res.send({mensaje:'ahi voy1'});
};


exports.getData = (req, res) => {
    res.send({swaggerSpec});
};