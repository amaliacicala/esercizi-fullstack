class BankAccount {
  #amount = 0;

  get balance() {
    return this.#amount
  }

  set balance(value) {
    this.#amount = value;
  }

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }

}

class BankAccountVip extends BankAccount {
  constructor(initialAmount) {
    super(initialAmount);
  }

  deposit(amount) {
    if (super.balance >= 1000) {
      super.deposit(amount + (amount * 3) / 100)
    } else {
      super.deposit(amount)
    }
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500); // 15
bankAccountVip.deposit(1200); // 36
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500); // 105
bankAccountVip.view(); // 5565 (5400 + (15 + 36 + 105))