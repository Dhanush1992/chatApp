/**
 * Created by dhanush on 5/22/17.
 */
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/client'));

require("./server/app.js")(app);

var port = 3000;


app.listen(port);