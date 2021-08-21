require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('models/jwt');
const errorHandler = require('models/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

// start server
const server = app.listen(3001, function () {
    console.log('Server listening on port 3001');
});
