const http = require('http');
const fileSystem = require('fs');
const path = require('path');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const readStream = fileSystem.createReadStream(__dirname + '/index.html','utf8');

    readStream.pipe(res);
}).listen(8010);

http.createServer(function (request, response) {
    const filePath = path.join(__dirname, 'plate_0.stl');
    const stat = fileSystem.statSync(filePath);

    response.writeHead(200, {
        'Cache-Control': 'public, max-age=31536000',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/vnd.ms-pki.stl',
        'Content-Length': stat.size
    });

    const readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(response);
}).listen(2000);
