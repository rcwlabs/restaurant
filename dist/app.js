'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 8080;
var app = (0, _express2.default)();

app.get('/', function (req, res) {
	res.send('Hey there congrats');
});

app.listen(PORT, function () {
	console.log('worky');
});
//# sourceMappingURL=app.js.map