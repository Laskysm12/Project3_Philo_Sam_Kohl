// Boiler Plate
var express = require("express");
var db = require("./models");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Static directory
app.use(express.static("public"));


//ROUTER
require('./routing/html-routes.js')(app);
require('./routing/api-routes.js')(app);

db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("Listening on port ", PORT);
    });
});