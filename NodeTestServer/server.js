
var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

var socket = require('socket.io');
var io = socket(server);
io.sockets.on('connection' , newConnection);

function newConnection(socket){
    console.log('new connection' + socket.id);
    let data = {
        x: 100,
        y: 100
    }
    //socket.broadcast.emit('mouse', data);
    io.sockets.emit('mouse', data);
    console.log(data);
}


console.log("Server-side code running");

