// Task3
import { add, sub, mul } from "./math.mjs";

const sum = add(4, 3);
const subtration = sub(4, 3);
const multiplication = mul(4, 3);

const solution = [sum, subtration, multiplication];
console.table(solution);

// Task4
import divide from "./single.mjs";
const division = divide(4, 2);
console.log(division);
