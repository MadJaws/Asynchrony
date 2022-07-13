async function dd() {
  let promise = await fetch('https://jsonplaceholder.typicode.com/users');
  if (promise.ok) {
    let json = await promise.json();
    console.log(json);
  } else {
    alert('Ошибка HTTP:' + promise.status);
  }
}
dd();
