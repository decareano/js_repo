var fs = require('fs');
var readableStream = fs.createReadStream('file.txt');
var writableStream = fs.createWriteStream('file1.txt');
//var data = '';

readableStream.setEncoding('utf8');

readableStream.on('data', function(chunk) {
    writableStream.write(chunk);
});

readableStream.on('end', function() {
    console.log(data);
});


var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.readFile(__dirname + '/data.txt', function (err, data) {
        res.end(data);
        console.log(req);
    });

});
// server.listen(8000);
// var stream = require('stream');

// var writestream = new stream.Stream()
// writestream.writable = false
// writestream.write = function (data) {
//   return true // true means 'yes i am ready for more data now'

//   // OR return false and emit('drain') when ready later
// }
// writestream.end = function (data) {
//   // no more writes after end
//   // emit "close" (optional)
// }

// writestream.write({number: 1});
// console.log(writestream);
// note: in node core data is always a buffer or string