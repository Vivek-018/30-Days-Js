// Task 9 and 10
class Account {
  #balance;

  constructor(bal) {
    this.#balance = bal;
  }

  depost(money) {
    this.#balance = this.#balance + money;
    return `depost successfully You bal is now : ${this.#balance}`;
  }

  withdraw(money) {
    this.#balance = this.#balance - money;
    return `withdraw succesfully Your bal : ${this.#balance}`;
  }

  checkbal() {
    return `Your Account bal : ${this.#balance}`;
  }
}

const account1 = new Account(1000);
console.log("account1 instance outside", account1);
console.log(account1.depost(500));
console.log(account1.withdraw(500));
console.log(account1.checkbal());
