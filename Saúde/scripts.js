let waterTotal = 0;

function addWater() {
    const water = parseFloat(document.getElementById('water').value);
    if (isNaN(water) || water <= 0) {
        alert("Por favor, insira uma quantidade válida de água.");
        return;
    }
    waterTotal += water;
    document.getElementById('water-total').innerText = waterTotal;
    document.getElementById('water').value = ''; // Limpa o campo de input
}

function calculateIMC() {
    const height = parseFloat(document.getElementById('height').value) / 100; // Converter para metros
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Por favor, insira uma altura e peso válidos.");
        return;
    }

    const imc = weight / (height * height);
    document.getElementById('imc-result').innerText = imc.toFixed(2);

    let status = '';
    if (imc < 18.5) {
        status = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        status = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        status = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        status = "Obesidade Grau 1";
    } else if (imc >= 35 && imc <= 39.9) {
        status = "Obesidade Grau 2";
    } else {
        status = "Obesidade Grau 3";
    }

    document.getElementById('imc-status').innerText = status;
    document.getElementById('imc-status').className = (imc >= 30) ? 'obesity' : ''; // Adiciona classe se obesidade

    // Recomendação de água com base no peso
    const waterRecommendation = (weight * 35).toFixed(0); // 35 ml de água por kg de peso
    document.getElementById('water-recommendation').innerText = waterRecommendation;
}
