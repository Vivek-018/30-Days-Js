// Task5
const arr = [1, 2, 3, 4, 5];
const newarr = [...arr, 6, 7, 8];
console.log(newarr);

// Task6
function sum(...args) {
  const sum = args.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return sum;
}
console.log(sum(1, 2, 3, 4));
