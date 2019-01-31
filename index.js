var express = require('express');
var http = require('http');
var socketio = require('socket.io-client');

var app = express();
var server = http.Server(app);
var websocket = socketio(server);

var clients = {};

websocket.on('connection', (socket) => {
    clients[socket.id] = socket;
    socket.on('subscribeToTimer', (interval) => {
        console.log('A client has connected', interval);
        setInterval(() => {
            socket.emit('timer', new Date());
        }, interval);
    });
});

server.listen(3000, () => console.log('listening on *:3000'));