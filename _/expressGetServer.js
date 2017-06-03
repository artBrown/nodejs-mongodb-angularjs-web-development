/**
 * Created by tetsuya on 6/3/17.
 *
 * https://stackoverflow.com/questions/38062689/how-do-i-get-the-http-server-from-the-express-app
 *
 */
// basic
var express = require('express')
var app = express()
// Express creates a server for you and starts it
var server = app.listen(80)

// or more
var express = require('express')
var app = express()
// you explicitly create the http server
var server = require('http').createServer(app)
server.listen(80)
