// Task8
let name = "abc";
let age = 25;
let printNameAge = () => {
  console.log(`${name} and ${age}`);
};

const obj = {
  name,
  age,
  printna: printNameAge,
};

console.log(obj);

// Task9
const prop1 = "name";
const prop2 = "age";
const prop3 = "salary";
const prop4 = "address";

const value1 = "Ravi";
const value2 = 25;
const value3 = 24000;
const value4 = "India";

const employeobj = {
  [prop1]: value1,
  [prop2]: value2,
  [prop3]: value3,
  [prop4]: value4,
};

console.log(employeobj);
