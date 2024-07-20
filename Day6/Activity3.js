// Task7
const arr = [2, 3, 4, 5, 9];
let newarr = arr.map((item, index) => {
  return item * 2;
});
console.log("new-Arr after map:", newarr);

// Task8
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newarray = array.filter((item, index) => {
  return item % 2 === 0;
});
console.log("new array after filter", newarray);

// Task9
const arr1 = [1, 2, 3, 4, 5];
let sumofarr1 = arr1.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sumofarr1);
