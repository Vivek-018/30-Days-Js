// Task1
// const mypromise = new Promise((resolve, reject) => {
//   // resovle with data
//   //   setTimeout(() => {
//   //     resolve({ name: "vivek", Qual: "B.tech" });
//   //   }, 2000);

//   // Resolve with message
//   setTimeout(() => {
//     resolve("resolved");
//   }, 2000);
// });

// mypromise.then((data) => {
//   console.log(data);
// });

// Task2
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error : something went wrong");
  }, 2000);
});

promise.catch((error) => {
  console.log(error);
});
