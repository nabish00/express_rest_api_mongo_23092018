'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _AdminRoutes = require('./src/Routes/AdminRoutes/AdminRoutes');

var _AdminRoutes2 = _interopRequireDefault(_AdminRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.use('/Admin', _AdminRoutes2.default);

var port = 3000;
app.listen(port, function () {
    console.log("Server Listening on Port : " + port);
});