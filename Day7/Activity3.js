// Task5
const library = {
  name: "my library",
  books: [
    {
      title: "book 1",
      author: "author 1",
      year: 2023,
    },
    {
      title: "book 2",
      author: "author 2",
      year: 1986,
    },
    {
      title: "book 3",
      author: "author 3",
      year: 1998,
    },
  ],
};
console.log(library);

// Task6
console.log(library.name);
console.log(
  library.books.forEach((book) => {
    console.log(book.title);
  })
);
