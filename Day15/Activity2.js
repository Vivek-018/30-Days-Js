// Task3
function generateUniqueIds() {
  let id = Math.floor(Math.random() * 10 + 1);
  return function incrementId() {
    id = id + 1;
    return id;
  };
}
// by each call my id is updated
let gerateId = generateUniqueIds();
console.log(gerateId());
console.log(gerateId());
console.log(gerateId());

// Task4
function greetuser() {
  let username = prompt("Enter your Name:");
  return function greeting() {
    return alert(`${username} Welcome to our Site`);
  };
}
const greeting = greetuser();
greeting();
