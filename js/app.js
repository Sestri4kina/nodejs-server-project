/**
 * Created by Sestri4kina on 17.12.2016.
 * Writable streams - allow node js to write data to a stream.
 * Readable streams - allow node js to read data from a stream.
 * Duplex - can read and write to a stream.
 *
 */

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url );
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./index.html').pipe(res);
    } else if(res.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./contact.html').pipe(res);
    }

    /* to serve json use 'Content-Type': 'application/json'
    and parse JSON.stringify(myObj) to res.end
    var myObj = {
        name: 'Nastia',
        job: 'JS coder',
        age: 29
    };
    */

    /*
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream('D:/projects/nodejs-server-project/index.html', 'utf8');
    myReadStream.pipe(res);
    */
});

server.listen(3000, '127.0.0.1');
console.log("ok, now we're listening to port 3000");
