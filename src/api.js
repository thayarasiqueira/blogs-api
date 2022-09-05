const express = require('express');
const usersControllers = require('./database/controllers/usersControllers');
const usersRoute = require('./database/routes/usersRoute');
const categoriesRoute = require('./database/routes/categoriesRoute');
const postsRoute = require('./database/routes/postsRoute');

const app = express();

app.use(express.json());

app.post('/login', usersControllers.login);
app.use('/', usersRoute);
app.use('/', categoriesRoute);
app.use('/', postsRoute);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
