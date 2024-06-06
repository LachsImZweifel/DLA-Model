var DlaHandler = require('./public/DlaHandler.js');
var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

var socket = require('socket.io');
var io = socket(server);
io.sockets.on('connection' , newConnection);

function newConnection(socket){
    console.log("Server-side code running");
    console.log('new connection' + socket.id);
    let dlaHandler = new DlaHandler();
    socket.emit('gridSizeData', JSON.stringify({width: dlaHandler.grid.gridWidth, height: dlaHandler.grid.gridHeight}));
    setInterval(updateAndSendData, 300, socket, dlaHandler);
}

function updateAndSendData(socket, dlaHandler){
    dlaHandler.updateParticles();
    socket.emit('DlaData', JSON.stringify({crystals: dlaHandler.grid.crystalParticles, particles: dlaHandler.grid.particles}));
}

