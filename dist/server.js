'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _Config = require('./Config/Config');

var _Config2 = _interopRequireDefault(_Config);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

require('dotenv');

var _AdminRoutes = require('./src/Routes/AdminRoutes/AdminRoutes');

var _AdminRoutes2 = _interopRequireDefault(_AdminRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log(process.env);
// console.log(Config.db.connectionString);
// const cn = process.env.CONNECTION_STRING;
// console.log(Config.db.connectionString);
_mongoose2.default.connect(_Config2.default.db.connectionString, { useNewUrlParser: true });
var db = _mongoose2.default.connection;

// Check connection
db.once('open', function () {
  console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', function (err) {
  console.log(err);
});
var app = (0, _express2.default)();
var port = 3000;

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.use('/Admin', _AdminRoutes2.default);

app.listen(port, function () {
  console.log("Server Listening on Port : " + port);
});