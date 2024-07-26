// Task6
const p1 = new Promise((resolve, reject) => {
  const operation = false;
  if (operation) {
    setTimeout(() => {
      resolve("operation is complete");
    }, 1000);
  } else {
    reject("Error : Operation is not complete due to Network error");
  }
});

p1.then((message) => {
  console.log(message);
}).catch((error) => {
  console.error("Error", error);
});

// Task7
function returnpromise() {
  return new Promise((resolve, reject) => {
    const asyncTask = false;
    if (asyncTask) {
      setTimeout(() => {
        resolve("Async Task is completed");
      }, 2000);
    } else {
      reject("Async task is not complete ");
    }
  });
}

async function handlepromise() {
  try {
    const message = await returnpromise();
    console.log(message);
  } catch (error) {
    console.error("Error:", error);
  }
}

handlepromise();
