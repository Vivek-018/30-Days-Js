// Task5
const h1 = document.querySelector("h1");
const body = document.querySelector("body");
body.removeChild(h1);

// Task6
const ul = document.querySelector("ul");
const last = document.querySelector("li");
// ul.lastChild
console.log(ul.lastChild);
console.log(ul.lastElementChild);
ul.removeChild(ul.lastElementChild);
