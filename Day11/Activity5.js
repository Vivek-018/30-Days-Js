// Task8
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise1 resolved");
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise2 resolved");
  }, 3000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise3 resolved");
  }, 5000);
});

Promise.all([promise1, promise2, promise3])
  .then((arr) => {
    console.log(arr);
  })
  .catch((error) => {
    console.log(error);
  });

// Task9

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 is resolved");
  }, 500);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 is resolved");
  }, 100);
});

Promise.race([p1, p2])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
