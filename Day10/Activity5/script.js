// Task9
const ul = document.querySelector("ul");
ul.addEventListener("click", (event) => {
  //   console.log(event);
  //   console.log("clicked");
  console.log(event.target.textContent);
});

// Task10
const nextul = document.querySelector("#dynamic");
nextul.addEventListener("click", (event) => {
  const li = document.createElement("li");
  li.innerText = "dynamic child element";
  nextul.appendChild(li);
//   console.log(event.target.textContent);
});
