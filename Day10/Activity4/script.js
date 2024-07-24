// Task7
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(event);
  //   console.log(event.target);
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  console.log(`form data : username : ${username} password : ${password}`);
});

// Task8
const select = document.querySelector("select");
const para = document.createElement("p");
const body = document.querySelector("body");
select.addEventListener("change", (event) => {
  //   console.log(event.target.value);
  para.textContent = event.target.value;
});
body.appendChild(para);
