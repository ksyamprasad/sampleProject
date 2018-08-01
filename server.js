var app = require('express');

app.get('/', function (req, res, next) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
});

app.listen(process.env.PORT || 3000);