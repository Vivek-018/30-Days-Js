// Task 5
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

// Task 6
// 5 -> 5* 4*3*2*1
// assignment implement this code to take input from the user 
let num = 3;
let factOfNum = 1;
do {
  factOfNum = factOfNum * num;
  num--;
} while (num > 0);

console.log(`Factorial Is : ${factOfNum}`)