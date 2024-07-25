// Task4
const fetchData = () => {
  let error = true;

  return new Promise((resolve, reject) => {
    if (!error) {
      resolve("resolved");
    } else {
      reject("Error happened");
    }
  });
};

async function fetch() {
  const data = await fetchData();
  console.log(data);
}

// fetch(); -> error handled occure while excecuting

// Task5
async function fetchE() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchE();
