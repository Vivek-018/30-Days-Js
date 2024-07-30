// Task5
function createArrOfFunctions(noOfFunc) {
  let arrOfFunc = [];
  for (let i = 0; i < noOfFunc; i++) {
    arrOfFunc.push(function printIndex() {
      return i;
    });
  }

  return arrOfFunc;
}
const arr = createArrOfFunctions(3);
console.log(arr[0]()); // function  at index 0 print 0
console.log(arr[1]()); // function  at index 1 print 1
console.log(arr[2]()); // function  at index 2 print 2

