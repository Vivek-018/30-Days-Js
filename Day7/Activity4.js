// Undestand this keyword
// console.log(this); //  log empty obj {}
// console.log(this); // in chrome log empty obj window obj

// how this is call in object method
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,

  getThis: function () {
    return this;
  },
};

// console.log("this in object method", person.getThis());

const person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// console.log('this in object method', person1.getFullName());

// this is in function
function test() {
  console.log("this in a function", this);
}
// test();

// Task7
const book = {
  title: "Book1",
  author: "abc",
  year: 2024,
  printBookTitleYear: function printTY() {
    console.log(`${this.title} and ${this.year}`);
  },
};
book.printBookTitleYear();
