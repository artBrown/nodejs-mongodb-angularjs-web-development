var fs = require('fs')
var http = require('http')
var url = require('url')
var ROOT_DIR = "html/"
var FILE_NAME = "hello.html"
http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true, false)
  var pathName = urlObj.pathName === undefined || urlObj.pathName ==="/"
    ? "/"
    : urlObj.pathName + FILE_NAME
  fs.readFile(ROOT_DIR + pathname, function (err, data) {
    if (err) {
      res.writeHead(404)
      res.end(JSON.stringify(err))
      return
    }
    res.writeHead(200)
    res.end(data)
  })
}).listen(9010)


var options = {
  hostname: 'localhost',
  port: '9010',
  path: '/'
}
function handleResponse(response) {
  var serverData = ''
  response.on('data', function (chunk) {
    serverData += chunk
  })
  response.on('end', function () {
    console.log(serverData)
  })
}
http.request(options, function (response) {
  handleResponse(response)
}).end()