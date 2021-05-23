const app = require('./app');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');



const port = 3004;

const apiLimiterLogin = rateLimit({
    max: 1000
});
app.use('/',apiLimiterLogin);
app.use(helmet());

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('./swagger');
const options = {

    ...swaggerDefinition,
    apis: ['./app/routes/*.js']
};

const swaggerSpec = swaggerJsDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));




app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`);
});