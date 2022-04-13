/* const sum = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
}

const divide = function (a, b) {
  return a / b;
}

const log = function (value) {
  console.log(value);
} */ 


const sum = (a, b) => a + b
sum (2, 4)
sum (5, 2)

const subtract = (a, b) => a - b
subtract ((sum(2,4) * sum(5,2)), 2)

const multiply = (a, b) => a * b
multiply (sum(2,4), sum(5,2))

const divide = (a, b) => a / b
divide (subtract(), 5)

const log = value => console.log(value)

log (divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5))