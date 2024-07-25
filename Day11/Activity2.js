// Task3
function fetchData(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

fetchData("first call ", 1000)
  .then((message) => {
    console.log(message);
    return fetchData("second call ", 1500);
  })
  .then((message) => {
    console.log(message);
    return fetchData("third call ", 2000);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("error message");
  })
  .finally((message) => {
    console.log("every call is finished ");
  });
