/* Server Configuration */

require("dotenv").load();
var express = require('express');
var app = express();
var config = require('./config/config');

var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compress = require('compression');
var methodOverride = require('method-override');
var cors = require('cors');

var url = require('url');

var ENV = require("./config/env");

var rootPath = path.normalize(__dirname + '/../');
var staticsPath = rootPath + config.statics;
var env = app.locals.ENV = config.env;
app.locals.ENV_DEVELOPMENT = env == 'development';

app.use(favicon(staticsPath + '/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(compress());
app.use(cors());

app.use(express.static(config.statics));

app.get('/env.js', function(req, res) {
    res.setHeader("Content-Type", "text/javascript");
    res.writeHead(200);
    res.end(ENV.concatenateVariables(ENV.VARIABLES));
});

app.use(function(req, res){
   res.sendFile(staticsPath + '/index.html');
});

app.listen(config.port);
console.log("Express server running on port:", config.port);
