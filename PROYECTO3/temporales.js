
server.get('/clients', (req, res) => {
    const userverified = authentication.verifyUser(req, res, usuarios);
    if (userverified) {
        res.send(usuarios);
    } else {
        res.send('Errror: ha ocurrido un problema con el token');
    }
    });
    
    server.get('/client/.idClient', (req, res) => {
        res.send({});
    });
    
    server.post('/client', (req, res) => {
        res.sendStatus({});
    });
    
    server.put('/client/.idClient', (req, res) => {
        res.send({});
    });
    
    server.delete('/client/.idClient', (req, res) => {
        res.send({});
    });