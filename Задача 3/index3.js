async function blabla() {
  for (let i = 0; i <= 10; i++) {
    let promis = new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await promis;
    console.log(i);
  }
}
blabla();
