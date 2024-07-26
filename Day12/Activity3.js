// Task4
class customError extends Error {
  constructor(message) {
    super(message);
    this.name = "Custom Error";
  }
}

function mutiply(num1, num2) {
  if (num1 <= 0 || num2 <= 0) {
    throw new customError("both should be greater than zero");
  }
}

try {
  const result = mutiply(2, 0);
  console.log(result);
} catch (error) {
  console.log("Error:", error.message);
  console.log("Error:", error.name);
}

// Task5
// Run the below code in chrome console window
class InputValidation extends Error {
  constructor(message) {
    super(message);
    this.name = "Input Validation";
  }
}

function userName(userInput) {
  if (typeof userInput !== String) {
    throw new InputValidation("Name should be string ");
  }
  console.log("Your Name : ", userInput);
  return true;
}

try {
  const IsString = userName(2);
  console.log("IsString :", IsString);
} catch (error) {
  console.error("Error", error);
  console.log("Error", error.message);
  console.log("ErrorName:", error.name);
}
