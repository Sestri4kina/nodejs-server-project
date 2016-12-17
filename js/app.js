/**
 * Created by Sestri4kina on 17.12.2016.
 * Writable streams - allow node js to write data to a stream.
 * Readable streams - allow node js to read data from a stream.
 * Duplex - can read and write to a stream.
 *
 */

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readable.txt', 'utf8');

myReadStream.on('data', function(chunk){
    console.log('new chunk received: ');
    console.log(chunk);
});

/*
var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url );
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey guys! Nice to see you!');
});

server.listen(3000, '127.0.0.1');
console.log("ok, now we're listening to port 3000");
*/