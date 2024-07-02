const http = require('http');

// Create server instance
http
    .createServer(function(req, res) {
    // Write response
    res.write('Hello World');
    res.end();
    })
    .listen(4500, () => console.log('Server Running...'));