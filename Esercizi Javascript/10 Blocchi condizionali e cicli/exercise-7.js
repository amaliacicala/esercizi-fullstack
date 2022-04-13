function sumUntil(maxValue) {
  let sum = 0

  for (let counter = 0; counter <= maxValue; counter++) {
    sum += counter
  }

  return sum 
}

console.log(sumUntil(5));