class BankAccount {
    constructor(balance) {

        this.deposit = function(num) {
            balance += num
            return console.log(`You have deposited €${num}. New balance: €${balance}.`)
        } 

        this.withdraw = function(num) {
            balance -= num
            return console.log(`You have withdrawn €${num}. New balance: €${balance}.`)
        }

        this.view = function(num) {
            return console.log(`Current balance: €${balance}.`)
        }
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();