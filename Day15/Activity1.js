// Task1
function outer() {
  let result = "aa gya result";
  return function inner() {
    return result;
  };
}
const inner = outer();
console.log(inner());

// Task2
function counter() {
  let count = 0;

  function increment() {
    return (count += 1);
  }
  function getcurrentvalue() {
    return count;
  }

  return {
    increment,
    getcurrentvalue,
  };
}

const mycounter = counter();
console.log(mycounter);
const currvalue = mycounter.getcurrentvalue();
console.log(currvalue);
const increase = mycounter.increment();
console.log(increase);
