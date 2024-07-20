// Task3
const book = {
  title: "abc",
  author: "vicky",
  year: 2024,
  printTitleAuthor: function printTA() {
    console.log(`Book's Title :${book.title} \n Book's Author :${book.author}`);
    console.log(`Book's Title :${this.title} Book's Author :${this.author}`);
    console.log(this);
  },
};
book.printTitleAuthor();

// Task4
book.updateyear = function update(year) {
  book.year = year;
  console.log("Upldated Year :", book.year);
};

book.updateyear(2025); // method call
console.log(book); // log the complete obj
