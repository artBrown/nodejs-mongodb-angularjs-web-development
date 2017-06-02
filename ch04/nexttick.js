//// extended
var fs = require("fs")
fs.stat("nexttick.js", function (err, stats) {
  if (stats) {
    console.log("fs_1 nexttick.js Exists")
  }
})
setImmediate(function () {
  console.log("Immediate Timer 1 Executed")
  fs.stat("nexttick.js", function (err, stats) {
    if (stats) {
      console.log("im_1.fs nexttick.js Exists")
    }
  })
})
setImmediate(function () {
  console.log("Immediate Timer 2 Executed")
  fs.stat("nexttick.js", function (err, stats) {
    if (stats) {
      console.log("im_2.fs nexttick.js Exists")
    }
  })
})
process.nextTick(function () {
  console.log("Next Tick 1 Executed")
  fs.stat("nexttick.js", function (err, stats) {
    if (stats) {
      console.log("nt_1.fs nexttick.js Exists")
    }
  })
})
process.nextTick(function () {
  console.log("Next Tick 2 Executed")
  fs.stat("nexttick.js", function (err, stats) {
    if (stats) {
      console.log("nt_2.fs nexttick.js Exists")
    }
  })
})
fs.stat("nexttick.js", function (err, stats) {
  if (stats) {
    console.log("fs_2 nexttick.js Exists")
    fs.stat("nexttick.js", function (err, stats) {
      if (stats) {
        console.log("fs_2.fs nexttick.js Exists")
      }
    })
  }
})
fs.stat("nexttick.js", function (err, stats) {
  if (stats) {
    console.log("fs_3 nexttick.js Exists")
    fs.stat("nexttick.js", function (err, stats) {
      if (stats) {
        console.log("fs_3.fs nexttick.js Exists")
      }
    })
  }
})
