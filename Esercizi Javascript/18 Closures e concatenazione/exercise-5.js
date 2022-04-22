function memoize(fn) {
  let cache = {};

  return function checkCache(num) {
    if (num in cache) {
      return `Fetching from cache for ${num}...\n factorial(${num}) = ${cache[num]}`;
    } else {
      cache[num] = fn(num);
      // return `Calculating result for ${num}...\n factorial${num} = ${cache[num]}`; <--- NaN?
      return cache[num];
    }
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(10)); // <-- ora risulta presente nella cache