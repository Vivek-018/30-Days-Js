// Task9
const fn = () => console.log("hello");
function callNtimes(func, num) {
  for (let i = 1; i <= num; i++) {
    func();
  }
  return true;
}

callNtimes(fn, 4);

// Task10
function func1(num) {
  return num + num;
}
function func2(num) {
  return Math.pow(num, 2);
}

function higherOrderFunction(fn1, fn2, value) {
  let result1 = fn1(value);
  let finalresult = fn2(result1);

  return finalresult;
}

let result = higherOrderFunction(func1, func2, 4);
console.log(result);
