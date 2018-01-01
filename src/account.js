(function(exports) {

  function Account(name, surname) {
    this.name = name
    this.surname = surname
    this.balance = 0
  }

  Account.prototype.getName = function () {
    return this.name
  };

  Account.prototype.getSurname = function () {
    return this.surname
  };

  Account.prototype.getBalance = function () {
    return this.balance
  };
  
  Account.prototype.depositMoney = function (money) {
    return this.balance += money
  };



  exports.Account = Account;
})(this);
