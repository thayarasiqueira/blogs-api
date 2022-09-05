const express = require('express');
const postsController = require('../controllers/postsController');
const validateToken = require('../validations/validateToken');

const usersRoute = express.Router();

usersRoute.post('/post', validateToken, postsController.addPost);

module.exports = usersRoute;