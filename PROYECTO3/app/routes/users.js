const express = require('express');

const controller = require('../controllers/users');

const router = express.Router();

const  path = 'users';
const  pathUnique = 'user';
const  pathOne = 'users/.idUser';


router.get(
    `/${path}`,
    controller.getData
);
module.exports = router
/*router.get(
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
);*/
