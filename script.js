let input = document.querySelector('input'),
    form = document.querySelector('form');

formulario.addEventListener('submit', validateAndSubmit, false);

function validateAndSubmit(event) {
  // Prevenindo o comportamento padrão.
  event.preventDefault();

  // Pegando o valor do input.
  var value = input.value;

  // Fazendo a validação e enviando caso esteja OK.
  if (value.length === "")
    alert('Preencha todos os campos');

  else {
    alert('Informações enviadas! Entraremos em contato em breve.');
    form.submit();
  }
}