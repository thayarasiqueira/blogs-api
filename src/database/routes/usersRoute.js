const express = require('express');
const usersController = require('../controllers/usersControllers');
const validateToken = require('../validations/validateToken');

const usersRoute = express.Router();

usersRoute.post('/user', usersController.createUser);
usersRoute.get('/user', validateToken, usersController.getUsers);

module.exports = usersRoute;