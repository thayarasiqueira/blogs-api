const express = require('express');
const usersController = require('../controllers/usersControllers');

const usersRoute = express.Router();

usersRoute.post('/user', usersController.createUser);

module.exports = usersRoute;