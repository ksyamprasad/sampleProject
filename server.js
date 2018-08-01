var express = require('express');
var app = express();

app.get('/', function (req, res, next) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey! this is a test project :)');
});

app.listen(process.env.PORT || 3000);