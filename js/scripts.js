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
    montante = montante * (1 + juros) + aporte || 0;
  }

  document.getElementById("resultadoJuros").innerText =
    "Montante Final: R$ " + montante.toFixed(2);
}

function calcularParcelas() {
  const valor = parseFloat(document.getElementById("valor").value);
  const parcelas = parseInt(document.getElementById("parcelas").value);
  const taxa = parseFloat(document.getElementById("taxa").value) / 100;

  if (isNaN(valor) || isNaN(parcelas) || isNaN(taxa)) {
    document.getElementById("resultadoParcelas").innerText = "Por favor, preencha todos os campos corretamente.";
    return;
  }

  const valorParcela = (valor * (1 + taxa)) / parcelas || 0;
  document.getElementById("resultadoParcelas").innerText = "Valor da Parcela: R$ " + valorParcela.toFixed(2);
}


function calcularPrazoOuAVista() {
  // Pegando os valores dos campos
  const valorCompra = parseFloat(document.getElementById('valorCompra').value);
  const descontoVista = parseFloat(document.getElementById('descontoVista').value);
  const numeroParcelas = parseInt(document.getElementById('parcelas').value);
  const jurosParcelado = parseFloat(document.getElementById('jurosParcelado').value);

  if (isNaN(valorCompra) || isNaN(descontoVista) || isNaN(numeroParcelas) || isNaN(jurosParcelado)) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Cálculo do valor à vista com o desconto
  const valorVista = valorCompra * (1 - descontoVista / 100);

  // Cálculo do valor parcelado
  const valorParcela = (valorCompra * (1 + jurosParcelado / 100)) / numeroParcelas;
  const totalParcelado = valorParcela * numeroParcelas;

  // Exibindo o resultado
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `
    <p><strong>Valor à vista:</strong> R$ ${valorVista.toFixed(2)}</p>
    <p><strong>Valor a prazo (total):</strong> R$ ${totalParcelado.toFixed(2)}</p>
    <p><strong>Valor da parcela:</strong> R$ ${valorParcela.toFixed(2)}</p>
    <p><strong>Conclusão:</strong> ${totalParcelado > valorVista ? 'Comprar à vista é mais vantajoso.' : 'Comprar a prazo pode ser vantajoso, dependendo das condições.'}</p>
  `;
}