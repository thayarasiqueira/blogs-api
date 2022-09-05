const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const validateToken = require('../validations/validateToken');

const usersRoute = express.Router();

usersRoute.post('/categories', validateToken, categoriesController.addCategory);

module.exports = usersRoute;