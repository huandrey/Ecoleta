const express = require('express');
const routes = require('./routes');
const nunjucks = require('nunjucks');
const index = express();

index.use(express.static('public'));
index.use(routes);

index.set('view engine', 'njk');

nunjucks.configure('views', {
    express: index,
    autoescape: false,
    noCache: true
})

index.listen(3333);