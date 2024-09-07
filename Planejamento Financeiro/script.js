let balance = 0;
let expenses = {};

function addIncome() {
    const incomeAmount = parseFloat(document.getElementById('income-amount').value);
    const incomeSource = document.getElementById('income-source').value;

    if (isNaN(incomeAmount) || incomeAmount <= 0) {
        alert("Por favor, insira um valor válido para a receita.");
        return;
    }

    balance += incomeAmount;
    updateBalance();
    alert(`Receita de R$ ${incomeAmount.toFixed(2)} adicionada de ${incomeSource}`);

    document.getElementById('income-amount').value = '';  // Limpa o campo de receita
    document.getElementById('income-source').value = '';  // Limpa o campo de fonte de receita
}

function addExpense() {
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
    const expenseCategory = document.getElementById('expense-category').value;

    if (isNaN(expenseAmount) || expenseAmount <= 0 || expenseCategory === '') {
        alert("Por favor, insira um valor válido e uma categoria para a despesa.");
        return;
    }

    balance -= expenseAmount;
    updateBalance();

    if (!expenses[expenseCategory]) {
        expenses[expenseCategory] = 0;
    }
    expenses[expenseCategory] += expenseAmount;

    updateExpenseSummary();

    document.getElementById('expense-amount').value = ''; // Limpa o campo de despesa
    document.getElementById('expense-category').value = ''; // Limpa o campo de categoria
}

function updateBalance() {
    document.getElementById('balance').innerText = balance.toFixed(2);
}

function updateExpenseSummary() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    for (const category in expenses) {
        const listItem = document.createElement('li');
        listItem.innerText = `${category}: R$ ${expenses[category].toFixed(2)}`;
        expenseList.appendChild(listItem);
    }
}
