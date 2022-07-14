// new Promise(function (resolve) {
//   resolve(1);
// })
//   .then(function (result) {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(result * 2), 3000);
//       console.log(result);
//     });
//   })
//   .then(function (result) {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(result * 2), 3000);
//       console.log(result);
//     });
//   })
//   .then(function (result) {
//     alert(result);
//   });

// async function blabla() {
//   let promise = Promise.resolve(1);
//   let result = await promise;
//   let newResult = new Promise((resolve) => {
//     setTimeout(() => resolve(result * 2), 3000);
//   });
//   result = await newResult;
//   let finalResult = new Promise((resolve) => {
//     setTimeout(() => resolve(result * 2), 3000);
//   });
//   result = await finalResult;
//   alert(result);
// }
// blabla();

async function blabla() {
  let result = await Promise.resolve(1);

  result = await new Promise((resolve) => {
    setTimeout(() => resolve(result * 2), 3000);
  });

  result = await new Promise((resolve) => {
    setTimeout(() => resolve(result * 2), 3000);
  });
  alert(result);
  console.log(result);
}
blabla();
