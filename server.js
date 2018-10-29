'use strict';

// Application dependencies
const express = require('express');

// Application setup
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// Application middleware
app.use(express.static('./public'));
app.set('view engine', 'ejs');

app.get('/', renderListBuildPage);

app.listen(PORT, () => console.log(`Listening on port: ${process.env.PORT}`));

function renderListBuildPage(request, response) {
  response.render('pages/index');
}
