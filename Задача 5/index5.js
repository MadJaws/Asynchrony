new Promise(function (resolve) {
  resolve(1);
})
  .then(function (result) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(result * 2), 3000);
      console.log(result);
    });
  })
  .then(function (result) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(result * 2), 3000);
      console.log(result);
    });
  })
  .then(function (result) {
    alert(result);
  });
