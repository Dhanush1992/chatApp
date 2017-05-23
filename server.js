/**
 * Created by dhanush on 5/22/17.
 */
var express = require('express');
var app = express();

var http = require('http').Server(app);

var io = require('socket.io')(http);

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

require("./server/app.js")(app);

io.on('connection', function(socket){
    socket.on("new-message", function(msg){
        console.log(msg);
        io.emit("receive-message", msg);
    });

    socket.on("disconnect", function(){
        console.log("user disconnected");
    });
});

http.listen(3001, function() {
    console.log('connected and working');
});