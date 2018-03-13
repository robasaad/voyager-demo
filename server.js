var http = require('http');
var fs = require('fs');

const PORT=9000;

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;

    console.log('Starting development server at http://localhost:9000/\nQuit the server with CONTROL-C.')

    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(PORT);
});