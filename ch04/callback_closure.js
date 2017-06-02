function logCar(logMsg, callback) {
  process.nextTick(function () {
    callback(logMsg)
  })
}
var cars = ["Ferrari", "Porsche", "Bugatti"]
for (var idx in cars) {
  var message = "Saw a " + cars[idx]
  logCar(message, function () {
    console.log("Normal Callback: " + message)
  })
}
for (var idx in cars) {
  var message = "Saw a " + cars[idx];
  (function (msg) {
    logCar(msg, function () {
      console.log("Closure Callback: " + msg)
    })
  })(message)
}

//// more
for (var idx in cars) {
  var message = "Saw a " + cars[idx];
  ((msg, idx) => {
    logCar(msg, () => {
      console.log(idx + " es6 Callback: " + msg)
    })
  })(message, idx)
}
