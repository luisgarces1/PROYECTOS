const express = require('express');

const controller = require('../controllers/productos');

const router = express.Router();

const  path = 'products';
const  pathUnique = 'product';
const  pathOne = '/product/.idProduct';


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

