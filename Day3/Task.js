// Activity 1
// Task 1
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number:", (num) => {
  console.log("You entered :", num);
  num = Number(num);

  if (num >= 0) {
    if (num === 0) {
      console.log(`num is zero`);
    } else {
      console.log(`postive`);
    }
  }
  if (num < 0) {
    console.log("negative");
  }

  rl.close();
});

// Task 2
// already imported the readline

const vote = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

vote.question("Enter your age:", (age) => {
  console.log("Your Age is :", age);
  age = Number(age);
  if (age >= 18) {
    console.log("You are eligible for Vote!");
  } else {
    console.log("You are not eligible for vote");
  }

  vote.close();
});

// Activity 2
const largest = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

largest.question("Enter three  number", (input) => {
  const [a, b, c] = input.split(" ").map(Number);
  // Number is build in javascript function that converts the string to number
  console.log("You entered :", a, b, c);

  if (a >= b && a >= c) {
    console.log(`${a} is the largest`);
  } else if (b >= a && b >= c) {
    console.log(`${b} is the largest`);
  } else {
    console.log(`${c} is the largest`);
  }

  largest.close();
});

// Activity 3
// Task 4
let dayNum = 4;
switch (dayNum) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wesnesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    break;
}

// Task 5
let score = 55;

switch (Math.floor(score / 10)) {
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
    break;
  case 7:
    console.log("C");
    break;
  case 6:
    console.log("D");
    break;
  case 5:
    console.log("F");
    break;

  default:
    break;
}

// Activity 4
let num = 15;
num % 2 === 0 ? console.log("Even") : console.log("Odd");

// Activity 5
let year = 2023;
if (year % 400 === 0) {
  console.log("leap year");
} else if (year % 100 === 0) {
  console.log("not leap year");
} else if (year % 4 === 0) {
  console.log("leap year");
} else {
  console.log("not leap year");
}
