const express = require('express');
const usersControllers = require('./database/controllers/usersControllers');
const usersRoute = require('./database/routes/usersRoute');

const app = express();

app.use(express.json());

app.post('/login', usersControllers.login);
app.use('/', usersRoute);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
