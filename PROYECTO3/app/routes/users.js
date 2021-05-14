const express = require('express');

const controller = require('../controllers/users');
const post  = require("../routes/users");






const router = express.Router();

const  path = 'users';
const  pathUnique = 'user';
const  pathOne = 'users/.idUser';

 /**
 * @swagger
 * /users:
 *   get:
 *     description: trae todos los usuarios del sistema
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: todos los usuarios del sistema
 */
router.get(
    `/${path}`,
    controller.getData
);

router.post(
    `/${pathUnique}`,
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
