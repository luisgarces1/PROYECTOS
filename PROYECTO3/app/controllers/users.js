exports.getData = (req, res) => {
    res.send({ data: 'esto viene desde RUTA' });
};


/*exports.getData = (req, res) => {
    const userverified = authentication.verifyUser(req, res, usuarios);
    if (userverified) {
        res.send(usuarios);
    } else {
        res.send('Errror: ha ocurrido un problema con el token');
    }
    };




exports.putData = (req, res) => {
    res.send({});
};

exports.postData = (req, res) => {
    res.send({});
};

exports.deleteData = (req, res) => {
    res.send({});
};*/