function openModal(modalId) {
  console.log(document.getElementById(modalId));

  document.getElementById(modalId).style.display = "flex";
}


function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function calcularJurosCompostos() {
  const capital = parseFloat(document.getElementById("capital").value);
  const aporte = parseFloat(document.getElementById("aporte").value);
  const juros = parseFloat(document.getElementById("juros").value) / 100;
  const tempo = parseInt(document.getElementById("tempo").value);

  if (isNaN(capital) || isNaN(aporte) || isNaN(juros) || isNaN(tempo)) {
    document.getElementById("resultadoJuros").innerText = "Por favor, preencha todos os campos corretamente.";
    return;
  }

  let montante = capital;
  for (let i = 1; i <= tempo; i++) {
    montante = montante * (1 + juros) + aporte;
  }

  document.getElementById("resultadoJuros").innerText =
    "Montante Final: R$ " + montante.toFixed(2);
}

function calcularParcelas() {
  const valor = parseFloat(document.getElementById("valor").value);
  const parcelas = parseInt(document.getElementById("parcelas").value);
  const taxa = parseFloat(document.getElementById("taxa").value) / 100;
  const valorParcela = (valor * (1 + taxa)) / parcelas;
  document.getElementById("resultadoParcelas").innerText = "Valor da Parcela: R$ " + valorParcela.toFixed(2);
}