// Task1
function checkOddEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is a Even Number`);
  } else {
    console.log(`${num} is a Odd Number`);
  }
}
checkOddEven(5);

// Task2
function squareNum(num) {
  return Math.pow(num, 2);
}
let result = squareNum(4);
console.log("result:", result);
