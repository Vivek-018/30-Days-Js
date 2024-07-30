// Task7
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("after memoized ", cache);
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Example function to be memoized
function add(a, b) {
  console.log("Computing result...");
  return a + b;
}

// Create a memoized version of the add function
const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // Outputs: Computing result... 3
console.log(memoizedAdd(1, 2)); // Outputs: 3 (result from cache)
console.log(memoizedAdd(2, 3)); // Outputs: Computing result... 5
console.log(memoizedAdd(2, 3)); // Outputs: 5 (result from cache)

// Task8
function memoizefact(fn) {
  const cache = {};
  return function (...args) {
    let key = JSON.stringify(...args);
    if (cache[key]) {
      console.log("after memozied", cache);
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const memoizefactorial = memoizefact(factorial);
console.log(memoizefactorial(4));
console.log(memoizefactorial(4));
console.log(memoizefactorial(8));
console.log(memoizefactorial(8));
