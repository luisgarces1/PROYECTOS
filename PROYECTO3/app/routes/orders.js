const express = require('express');

const controller = require('../controllers/orders');

const router = express.Router();

const  path = 'orders';
const  pathUnique = 'order';
const  pathOne = '/order/.idOrder';


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

