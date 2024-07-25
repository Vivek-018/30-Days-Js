// Task6
fetch("https://fakestoreapi.com/products")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Task 7

const fetchData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    throw Error(error);
  }
};
fetchData();
