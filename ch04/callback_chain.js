function logCar(car, callback) {
  console.log("Saw a %s", car)
  if (cars.length) {
    process.nextTick(function () {
      callback()
    })
  } else {
    new logCars1().run(cars1)
  }
}
function logCars(cars) {
  var car = cars.pop()
  logCar(car, function () {
    logCars(cars)
  })
}
var cars = ["Ferrari", "Porsche", "Bugatti", "Lamborghini", "Aston Martin"],
  cars1 = [].concat(cars)
logCars(cars)

//// more
class logCars1 {
  constructor() {
    console.log('')
  }

  run(cars) {
    this._cars = cars
    var car = this._cars.pop()
    this.logCar(car, () => {
      this.run(this._cars)
    })
  }

  logCar(car, callback) {
    console.log("1 Saw a %s", car)
    if (this._cars.length) {
      process.nextTick(() => {
        callback()
      })
    }
  }
}
