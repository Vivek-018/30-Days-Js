// Task 1
const button = document.querySelector("button");
const para = document.querySelector("p");
button.addEventListener("click", (event) => {
  //   console.log(event);
  //   console.log("event.type", event.type);
  //   console.log("event.target.textcontent", event.target.innerText);
  para.innerText = "hello, I am fine ";
});

// Task2
const body = document.querySelector("body");
const image = document.querySelector("img");

image.addEventListener("dblclick", (event) => {
  image.classList.toggle("toggle");
});
