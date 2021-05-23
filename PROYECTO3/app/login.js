const express = require('express');
const login = express.Router();
const actions = require('../src/database/actions/actions');
const authentication = require('../src/authentication');

login.post('/login', async (req, res) => {
    const arg = req.body;
    console.log (arg)
    const { username, password } = arg; // same names in the front-end (or Postman) for the login
    try {
      const user = await actions.get(`
        SELECT idUser, Name, UserName, Password, Email, Phone, Addres, Tipe 
        FROM users 
        WHERE UserName = :username 
          AND Password = :password`, 
        { username: username, password: password });
      
      if (Array.isArray(user)&& user.length > 0) {
        const data = { id: user[0].id, username, password, user_type: user[0].user_type_id };
        const token = authentication.generateToken(data);
        res.status(200).json({
          result: 'Login correcto.',
          id: data.id,
          userType: data.user_type,
          token
        });
        return;
      } else if (user.length == 0) {
        res.status(404).json({
          result: 'El usuario no existe.',
        });
        return;
      } else {
        throw new Error('Error al conectarse con la base de datos. Por favor intente nuevamente.');
      };
    } catch (error) {
      console.log(error.message);
      res.status(400).json( { message: error.message } );
    };
  });

  module.exports = login