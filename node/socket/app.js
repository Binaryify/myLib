var http = require('http');
var express = require('express');
var sio = require('socket.io');

var app = express();
app.use(express.static('public'));
var server = http.createServer(app);
app.get('', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})
server.listen(1337);


var io = sio.listen(server);
var values = [];
io.sockets.on('connection', function(socket) {
    socket.emit('sendmessage1', values)
    socket.on('sendmessage2', function(value) {
        values.push(value);
        io.sockets.emit('sendmessage1', values)

        values.forEach(function(value) {
            var str = '';
            console.log( value + '\n')
        })
        
    })
})
console.log('server start,port:1337')
