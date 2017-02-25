// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function (req, res) {
//   fs.readFile('form.html', function(err, data) {
//     res.writeHead(200, {
//       'Content-Type' : 'text/html',
//       'Content-Length': data.length
//     });
//     res.write(data);
//     res.end();
//   });
// })
// server.listen(3000);

var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})