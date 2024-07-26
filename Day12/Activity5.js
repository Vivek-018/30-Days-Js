// Task8
const promise = fetch("https://fakestoreapi.com/pro");
promise
  .then((response) => {
    if (!response.ok) {
      throw new Error("Url is incorrect !");
    }
    response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error", error.message);
  });

// Task 9

async function fetchData() {
  try {
    const response = await fetch("https://fakestreapi.com/product");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error", error.message);
  }
}
fetchData();
