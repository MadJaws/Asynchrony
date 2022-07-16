function tableCreaty() {
  let body = document.body;
  let tb = document.createElement('table');
  tb.setAttribute('id', 'table');
  console.log(body);
  let tr = tb.insertRow();
  td = tr.insertCell();
  td.appendChild(document.createTextNode('id'));
  td.setAttribute('rowspan', 3);
  td.setAttribute('colspan', 2);
  td = tr.insertCell();
  td.appendChild(document.createTextNode('name'));
  td.setAttribute('rowspan', 3);
  td.setAttribute('colspan', 2);
  td = tr.insertCell();
  td.appendChild(document.createTextNode('username'));
  td.setAttribute('rowspan', 3);
  td.setAttribute('colspan', 2);
  td = tr.insertCell();
  td.appendChild(document.createTextNode('email'));
  td.setAttribute('rowspan', 3);
  td.setAttribute('colspan', 2);
  td = tr.insertCell();
  td.appendChild(document.createTextNode('address'));
  td.setAttribute('colspan', 10);
  td = tr.insertCell();
  td.appendChild(document.createTextNode('company'));
  td.setAttribute('colspan', 6);

  tr = tb.insertRow();

  td = tr.insertCell();
  td.appendChild(document.createTextNode('city'));
  td.setAttribute('colspan', 2);
  td.setAttribute('rowspan', 2);
  td = tr.insertCell();
  td.appendChild(document.createTextNode('geo'));
  td.setAttribute('colspan', 2);
  td = tr.insertCell();
  td.appendChild(document.createTextNode('street'));
  td.setAttribute('colspan', 2);
  td.setAttribute('rowspan', 2);
  td = tr.insertCell();
  td.appendChild(document.createTextNode('suite'));
  td.setAttribute('colspan', 2);
  td.setAttribute('rowspan', 2);
  td = tr.insertCell();
  td.appendChild(document.createTextNode('zipcode'));
  td.setAttribute('colspan', 2);
  td.setAttribute('rowspan', 2);
  td = tr.insertCell();
  td.appendChild(document.createTextNode('bs'));
  td.setAttribute('colspan', 2);
  td.setAttribute('rowspan', 2);
  td = tr.insertCell();
  td.appendChild(document.createTextNode('catchphrase'));
  td.setAttribute('colspan', 2);
  td.setAttribute('rowspan', 2);

  td = tr.insertCell();
  td.appendChild(document.createTextNode('name'));
  td.setAttribute('colspan', 2);
  td.setAttribute('rowspan', 2);

  tr = tb.insertRow();

  td = tr.insertCell();
  td.appendChild(document.createTextNode('lat'));
  td = tr.insertCell();
  td.appendChild(document.createTextNode('lng'));

  body.appendChild(tb);
}

function fillTable(data) {
  let table = document.getElementById('table');
  for (let user of data) {
    tr = table.insertRow();
    td = tr.insertCell();
    td.appendChild(document.createTextNode(user.id));
    td.setAttribute('colspan', 2);
    td = tr.insertCell();
    td.appendChild(document.createTextNode(user.name));
    td.setAttribute('colspan', 2);
    td = tr.insertCell();
    td.appendChild(document.createTextNode(user.username));
    td.setAttribute('colspan', 2);
    td = tr.insertCell();
    td.appendChild(document.createTextNode(user.email));
    td.setAttribute('colspan', 2);
    td = tr.insertCell();
    td.appendChild(document.createTextNode(user.address.city));
    td.setAttribute('colspan', 2);
    td = tr.insertCell();
    td.appendChild(document.createTextNode(user.address.geo.lat));

    td = tr.insertCell();
    td.appendChild(document.createTextNode(user.address.geo.lng));

    td = tr.insertCell();
    td.appendChild(document.createTextNode(user.address.street));
    td.setAttribute('colspan', 2);
    td = tr.insertCell();
    td.appendChild(document.createTextNode(user.address.suite));
    td.setAttribute('colspan', 2);
    td = tr.insertCell();
    td.appendChild(document.createTextNode(user.address.zipcode));
    td.setAttribute('colspan', 2);
    td = tr.insertCell();
    td.appendChild(document.createTextNode(user.company.bs));
    td.setAttribute('colspan', 2);
    td = tr.insertCell();
    td.appendChild(document.createTextNode(user.company.catchPhrase));
    td.setAttribute('colspan', 2);
    td = tr.insertCell();
    td.appendChild(document.createTextNode(user.company.name));
    td.setAttribute('colspan', 2);
  }
}
async function dd() {
  let promise = await fetch('https://jsonplaceholder.typicode.com/users');
  if (promise.ok) {
    let json = await promise.json();
    console.log(json);
    tableCreaty();
    fillTable(json);
  } else {
    alert('Ошибка HTTP:' + promise.status);
  }
}
dd();
