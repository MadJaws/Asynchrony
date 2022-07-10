for (let i = 1; i <= 10; i++) {
  new Promise(function (resolve) {
    setTimeout(resolve, 1000 * i);
  }).then(function (result) {
    console.log(i);
  });
}
