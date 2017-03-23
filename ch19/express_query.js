var express = require('express');
var app = express();
app.listen(8079);
app.get('/', function(req, res) {
  res.send(JSON.stringify(req.query));
});