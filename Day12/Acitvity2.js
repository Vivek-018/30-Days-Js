// Task3
function divide(num1, num2) {
  if (num2 <= 0) {
    throw new Error("Denominator should not be zero!");
  }
  return num1 / num2;
}

try {
  const result = divide(4, 0);
  console.log(result);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("excecution is complete");
}
