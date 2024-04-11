let addExpenseButton = document.getElementById('add-expense-button');
let expenseDataTable = document.getElementById('expenseDataTable');
let nameField = document.getElementById('name');
let dateField = document.getElementById('date');
let amountField = document.getElementById('amount');

addExpenseButton.addEventListener('click', function(){
    data = nameField.value;
    let row = document.createElement('tr');
    row.innerText = data;
    console.log(row);
    expenseDataTable.appendChild(row);
})