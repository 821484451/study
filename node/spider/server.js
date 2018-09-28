var http = require('http');

var server = http.createServer((req, res) => {
    if(req.url === '/zqz'){
        throw 'req Error';
    }
    res.end('Hello world!');
}).listen('80', 'localhost', () => {
    console.log('Server running...');
});