var stream = require('stream')
var util = require('util')
util.inherits(Answers, stream.Readable)
function Answers(opt) {
  stream.Readable.call(this, opt)
  this.quotes = ["yes", "no", "maybe"]
  this._index = 0
}
Answers.prototype._read = function () {
  if (this._index > this.quotes.length) {
    this.push(null)
  } else {
    this.push(this.quotes[this._index])
    this._index += 1
  }
}
var r = new Answers()
console.log("Direct read: " + r.read().toString())
r.on('data', function (data) {
  console.log("Callback read: " + data.toString())
})
r.on('end', function (data) {
  console.log("No more answers.")
})

// more todo: steps
class Answers1 extends stream.Readable {
//  constructor(opt) {
//    super(opt)
//  }
  run() {
  this.quotes = ["yes", "no", "maybe"]
  this._index = 0
    return this
  }
  _read () {
    if (this._index > this.quotes.length) {
      this.push(null)
    } else {
      this.push(this.quotes[this._index])
      this._index += 1
    }
  }
}
var r1 = new Answers1().run()
console.log("Direct read: " + r1.read().toString())
r1.on('data', function (data) {
  console.log("Callback read: " + data.toString())
})
r1.on('end', function (data) {
  console.log("No more answers.")
})