function calculate(num) {
    let total = 0; 

    let operations = {
        add: function(num) {
            total += num;
            return this
        }, 

        multiply: function(num) {
            total *= num;
            return this
        },

        sub: function(num) {
            total -= num;
            return this
        },

        divide: function(num) {
            total /= num;
            return this
        },

        printResult: function() {
            return total
        }
    }

    return operations;
};

const calculator = calculate(0);
console.log(calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult()); // Il risultato sarà: 7