document.addEventListener("DOMContentLoaded", function () {
  // Lista de modais que queremos carregar (arquivos da pasta /modals)
  const modals = [
    'modal-juros.html',
    'modal-parcelas.html',
    'modal-outro.html'
  ];

  // Carregar cada arquivo de modal
  modals.forEach(modal => {
    fetch(`modals/${modal}`)
      .then(response => response.text())
      .then(data => {
        document.getElementById('modais').innerHTML += data;
      })
      .catch(error => console.error('Erro ao carregar o modal:', error));
  });
});

window.addEventListener('click', function (event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    // Se o clique for fora do conteúdo do modal, fechar o modal
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});