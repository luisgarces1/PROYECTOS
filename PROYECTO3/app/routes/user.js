const express = require('express');

const controller = require('../controllers/user');

const router = express.Router();

const  path = 'users';
const  pathUnique = 'user';
const  pathOne = 'users/.idUser';


router.get(
    `/${path}`,
    controller.getData
);

router.get(
    `/${pathOne}`,
    controller.getData
);

router.put(
    `/${pathOne}`,
    controller.getData
);

router.post(
    `/${pathUnique}`,
    controller.getData
);

router.delete(
    `/${pathOne}`,
    controller.getData
);



module.exports = router

