// Task3
const arrOfNum = [1, 2, 3, 4, 5];
const [first, second, ...remaining] = arrOfNum;
console.log(`${first} and ${second}`);
console.log(remaining);
// Task4
const book = {
  title: "abc",
  author: "raju",
  year: 1998,
};

const { title, author, ...rest } = book;
console.log(`${title} & ${author}`);
console.log(rest);
