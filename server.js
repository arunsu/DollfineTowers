//var http = require('http');
//
//http.createServer(function (req, res) {
//
//    res.writeHead(200, { 'Content-Type': 'text/html' });
//    res.end('Hello, world!');
//
//}).listen(process.env.PORT || 8080);


var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
}).listen(8080, function () {
    console.log("Express server started")
})