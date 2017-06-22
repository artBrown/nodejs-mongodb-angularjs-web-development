/**
 * Created by tetsuya on 6/3/17.
 *
 * https://medium.freecodecamp.com/node-js-streams-everything-you-need-to-know-c9141306be93
 *
 */
// bad
const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res) => {
  fs.readFile('./big.file', (err, data) => {
    if (err) throw err
    res.end(data)
  })
})
server.listen(8000)

// better
const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res) => {
  const src = fs.createReadStream('./big.file')
  src.pipe(res)
})
server.listen(8000)
