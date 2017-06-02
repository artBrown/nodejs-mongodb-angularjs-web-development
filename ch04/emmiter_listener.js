var events = require('events')
function Account() {
  this.balance = 0
  events.EventEmitter.call(this)
  this.deposit = function (amount) {
    this.balance += amount
    this.emit('balanceChanged')
  }
  this.withdraw = function (amount) {
    this.balance -= amount
    this.emit('balanceChanged')
  }
}
Account.prototype.__proto__ = events.EventEmitter.prototype

function displayBalance() {
  console.log("Account balance: $%d", this.balance)
}
function checkOverdraw() {
  if (this.balance < 0) {
    console.log("Account overdrawn!!!")
  }
}
function checkGoal(acc, goal) {
  if (acc.balance > goal) {
    console.log("Goal Achieved!!!")
  }
}
var account = new Account()
account.on("balanceChanged", displayBalance)
account.on("balanceChanged", checkOverdraw)
account.on("balanceChanged", function () {
  checkGoal(this, 1000)
})
account.deposit(220)
account.deposit(320)
account.deposit(600)
account.withdraw(1200)

//// extended
console.log('')
class Account1 extends events.EventEmitter {
  displayBalance() {
    console.log("Account1 balance: $%d", this.balance)
  }

  checkOverdraw() {
    if (this.balance < 0) {
      console.log("Account1 overdrawn!!!")
    }
  }

  checkGoal(acc, goal) {
    if (acc.balance > goal) {
      console.log("Goal Achieved!!!")
    }
  }

  deposit(amount) {
    this.balance += amount
    this.emit('balanceChanged')
  }

  withdraw(amount) {
    this.balance -= amount
    this.emit('balanceChanged')
  }
}
Account1.prototype.balance = 0

var account1 = new Account1()
account1.on("balanceChanged", account1.displayBalance)
account1.on("balanceChanged", account1.checkOverdraw)
account1.on("balanceChanged", () => {
  account1.checkGoal(account1, 1000)
})
account1.deposit(220)
account1.deposit(320)
account1.deposit(600)
account1.withdraw(1200)
