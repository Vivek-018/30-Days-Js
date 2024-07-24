// Task5
const input = document.querySelector("input");
input.addEventListener("keydown", (event) => {
  console.log(`${event.key} is pressed`);
});

// Task6
const body = document.querySelector("body");
const para = document.createElement("p");

input.addEventListener("keyup", (event) => {
  console.log("value:", event.target.value);
  para.textContent = event.target.value;
});

body.appendChild(para);
