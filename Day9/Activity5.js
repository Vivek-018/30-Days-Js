// Task9
const button = document.querySelector("button");
const para = document.querySelector("p");
button.addEventListener("click", () => {
  para.textContent = "Hi How are you!";
});

// Task10
const bgbutton = document.querySelectorAll("button");

bgbutton[1].addEventListener("mouseover", () => {
  bgbutton[1].style.border = "2px solid black";
});
bgbutton[1].addEventListener("mouseout", () => {
  bgbutton[1].style.border = "none";
});
