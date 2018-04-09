// BASE PACKAGE SETUP
// =============================================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var shortid = require("shortid");


// CREATE CONFIG
// =============================================================================
var port = process.env.PORT || 3000;

// JS FILE INCLUDES
// =============================================================================
var controllers = require('./service/controllers/index');
var logMiddleware = require('./service/middlewares/logging');
var utils = require('./service/common/utils');

// DISPLAY MODULES
// =============================================================================
console.log('=========================================');
console.log('Server starting up...');
console.log('=========================================');
console.log('- Load Controllers -> ' + (typeof controllers === "function"));
console.log('- Load Utilities -> ' + (typeof utils === "object"));
console.log('- Load Id Generator -> ' + (typeof shortid === "function"));
console.log('- Load Logging Middleware -> ' + (typeof logMiddleware === "function"));
console.log('- Load Api Controllers -> ' + (typeof controllers === "function"));

// SET THE MODULES
// =============================================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(errorHandler());
app.use(controllers);


// START THE SERVER
// =============================================================================
var server = app.listen(port, function () {
    console.log('=========================================');
    console.log('API:       http://localhost:' + port + '/api/');
    console.log('=========================================');
});
