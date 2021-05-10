const express = require('express');

const controller = require('../controllers/detailproducts');

const router = express.Router();

const  path = 'detailproducts/.idOrder';
const  pathUnique = 'detailproducts';
const  pathOne = 'detailproducts/.idDetailProduct';


router.get(
    `/${path}`,
    controller.getData
);

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



module.exports = router