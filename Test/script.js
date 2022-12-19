// JS Code here...

function addProduct(event) {
  event.preventDefault();

  const name = document.querySelector('.productName').value;
  const price = (+document.querySelector('.productPrice').value).toFixed(2);
  const iva = document.querySelector('.productIVA').value;
  const tableBody = document.querySelector('.table-content');

  if (!name.trim() || !price.trim()) {
    alert('Nombre y precio requerido');
    return;
  }

  const currentDate = new Date().toLocaleDateString();
  const newId = Math.floor(Math.random() * 1000);

  console.log(currentDate);
  console.log(newId);

  const newRow = document.createElement('tr');

  const idCell = document.createElement('td');
  const nameCell = document.createElement('td');
  const priceCell = document.createElement('td');
  const ivaCell = document.createElement('td');
  const totalCell = document.createElement('td');
  const dateCell = document.createElement('td');
  const actionsCell = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', removeProduct);

  idCell.innerText = newId;
  nameCell.innerText = name;
  priceCell.innerText = `$${price}`;
  ivaCell.innerText = `${iva}%`;
  totalCell.innerText = `$${(+price + +(price * (iva/100))).toFixed(2)}`;
  dateCell.innerText = currentDate;

  actionsCell.appendChild(deleteButton);

  newRow.appendChild(idCell);
  newRow.appendChild(nameCell);
  newRow.appendChild(priceCell);
  newRow.appendChild(ivaCell);
  newRow.appendChild(totalCell);
  newRow.appendChild(totalCell);
  newRow.appendChild(dateCell);
  newRow.appendChild(actionsCell);

  tableBody.appendChild(newRow);

  const mail = 'jonathan.juarez@jdoutstanding.com';
}

function removeProduct(event) {
  const confirmation = confirm('Delete Record?');

  if (!confirmation) return;

  const tableBody = document.querySelector('.table-content');
  const targetProductRow = event.target.parentElement.parentElement;
  tableBody.removeChild(targetProductRow);
}