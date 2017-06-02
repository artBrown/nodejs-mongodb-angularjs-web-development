var events = require('events')
var util = require("util")

function CarShow() {
  events.EventEmitter.call(this)
  this.seeCar = function (make) {
    this.emit('sawCar', make)
  }
}
//CarShow.prototype.__proto__ = events.EventEmitter.prototype
util.inherits(CarShow, events.EventEmitter) // better

var show = new CarShow()
function logCar(make) {
  console.log("Saw a " + make)
}
function logColorCar(make, color) {
  console.log("Saw a %s %s", color, make)
}
show.on("sawCar", logCar)
show.on("sawCar", function (make) {
  var colors = ['red', 'blue', 'black']
  var color = colors[Math.floor(Math.random() * 3)]
  logColorCar(make, color)
})
show.seeCar("Ferrari")
show.seeCar("Porsche")
show.seeCar("Bugatti")
show.seeCar("Lamborghini")
show.seeCar("Aston Martin")

//// more wt ch10 util_inherit
function Writer() {
}
util.inherits(Writer, events.EventEmitter)

Writer.prototype.write = function (data) {
  this.emit("data", data)
}
var w = new Writer()
console.log(w instanceof events.EventEmitter)
console.log(Writer.super_ === events.EventEmitter)
w.on("data", function (data) {
  console.log('w Received data: "' + data + '"')
})
w.write("w Some Data!")

class Writer1 extends events.EventEmitter {
  constructor() {
    super()
  }
  write(data) {
    this.emit("data", data)
  }
}
var w1 = new Writer1()
console.log(w1 instanceof events.EventEmitter)
console.log(Writer1.super_ === events.EventEmitter) // TODO: false...
w1.on("data", function (data) {
  console.log('w1 Received data: "' + data + '"')
})
w1.write("w1 Some Data!")
