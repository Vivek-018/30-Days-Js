// Task7
const product = function (num1, num2 = 2) {
  return num1 * num2;
};

let result1 = product(4); // in this case second parameter is 2
let result2 = product(4, 5); // in this overwrite the second parameter from default
console.log(result2);
console.log(result1);

// Task8
const greeting = (name, age = 20) => {
  return `Hello ${name}, How are you doing!`;
};
let greet = greeting("Vivek", 23);
console.log(greet);
