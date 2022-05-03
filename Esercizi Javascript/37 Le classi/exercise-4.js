class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(num) {
        this.balance += num
        return console.log(`You have deposited €${num}. New balance: €${this.balance}.`)
    } 

    withdraw(num) {
        this.balance -= num
        return console.log(`You have withdrawn €${num}. New balance: €${this.balance}.`)
    }

    view(num) {
        return console.log(`Current balance: €${this.balance}.`)
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();