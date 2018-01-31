const path = require('path');
const Express = require('express');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const router = require('./src/routes.js');

// EXPRESS
const app = new Express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());
// app.use(cookieParser());

// ROUTES

app.use(Express.static(path.resolve(__dirname, './public')));
app.use('/', router);

// INITIALIZE
const port = 3000;

app.listen(port, () => {
  console.log('listening ', port);
});

module.exports = app;