// Task8
const book = {
  title: "story",
  author: "rahul",
  year: 2024,
};

for (const key in book) {
  console.log(`${key} : ${book[key]}`);
}

// Task9
const keys = Object.keys(book);
console.log(keys);
const values = Object.values(book);
console.log(values);
const keysvalues = Object.entries(book);
console.log(keysvalues);
