function random(min, max) {
  let rand = Math.random() * (max + min);
  console.log(Math.floor(rand));
  rand = Math.floor(rand);
  let promis = new Promise(function (resolve, reject) {
    if (rand <= 5) {
      setTimeout(resolve('Выполнено'), rand * 1000);
    } else {
      setTimeout(reject('Error'), rand * 1000);
    }
  });

  promis.then(
    (result) => alert(result),
    (error) => alert(error)
  );
}
random(1, 10);
