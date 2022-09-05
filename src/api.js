const express = require('express');
const usersControllers = require('./database/controllers/usersControllers');

const app = express();

app.use(express.json());

app.post('/login', usersControllers.login);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
