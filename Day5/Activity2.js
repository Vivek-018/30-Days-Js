// Task3
const findMax = function (a, b) {
  if (a > b) {
    console.log(`${a} is greater than ${b}`);
    return true;
  } else {
    console.log(`${b} is greater than ${a} `);
    return true;
  }
};
// by default the function return undefined
let result = findMax(4, 5);
console.log(result);

// Task4
const concatestr = function (str1, str2) {
  // multiple ways to concate a string using "+" oprator and string litarals
  return str1.concat(str2);
};
console.log(concatestr("hello", "World!"));
