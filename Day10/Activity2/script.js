// Task1
const button = document.querySelector("button");
button.addEventListener("mouseover", (event) => {
  button.style.background = "green";
  console.log("mouseover");
});

// Task2
button.addEventListener("mouseout", (event) => {
  button.style.background = "white";
  console.log("mouseoout");
});
