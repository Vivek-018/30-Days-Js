// Task1
function mutiply(a, b) {
  if (a <= 0 || b <= 0) {
    throw new Error("a and b both should be greater than zero");
  }
  return a * b;
}
try {
  const result = mutiply(0, 3);
  console.log(result);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("execution is complete");
}

// Task2

function divide(num1, num2) {
  if (num2 <= 0) {
    throw new Error("Denominator should not be zero!");
  }
  return num1 % num2;
}

try {
  const result = divide(4, 0);
  console.log(result);
} catch (error) {
  console.log("Error:", error.message);
} 
