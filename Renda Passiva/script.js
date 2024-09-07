function calculateIncome() {
    const investment = parseFloat(document.getElementById('investment').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);

    if (!isNaN(investment) && !isNaN(rate) && !isNaN(years)) {
        // Cálculo da renda passiva total para o período selecionado
        const income = investment * rate * years;
        document.getElementById('income').innerText = income.toFixed(2);
    } else {
        document.getElementById('income').innerText = "0.00";
    }
}