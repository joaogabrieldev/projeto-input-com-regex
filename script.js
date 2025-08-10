// Formatação automática do CPF
const InputCPF = document.getElementById("input-cpf");

const InputTEL = document.getElementById("input-tel");

InputCPF.addEventListener("input", (event) => {
  formatarCPF(event.target);
});

function formatarCPF(input) {
  let valorLimpo = input.value.replace(/\D/g, "");

  if (valorLimpo.length > 11) {
    valorLimpo = valorLimpo.slice(0, 11);
  }

  let valorFormatado = valorLimpo;

  if (valorLimpo.length > 3) {
    valorFormatado = valorLimpo.replace(/(\d{3})(\d)/, "$1.$2");
  }

  if (valorLimpo.length > 6) {
    valorFormatado = valorLimpo.replace(/(\d{3})(\d{3})(\d)/, "$1.$2.$3");
  }

  if (valorLimpo.length > 9) {
    valorFormatado = valorLimpo.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      "$1.$2.$3-$4"
    );
  }

  if (valorLimpo.length == 11) {
    InputTEL.focus();
  }

  input.value = valorFormatado;
}

InputTEL.addEventListener("input", (event) => {
  formatarTEL(event.target);
});

function formatarTEL(input) {
  let valorLimpo = input.value.replace(/\D/g, "");

  if (valorLimpo.length > 11) {
    valorLimpo.slice(0, 11);
  }

  let valorFormatado = valorLimpo;

  // DDD
  if (valorLimpo.length > 2) {
    valorFormatado = valorLimpo.replace(/(\d{2})(\d)/, "($1) $2");
  }

  //Número Formatado
  if (valorLimpo.length > 7) {
    valorFormatado = valorLimpo.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }

  input.value = valorFormatado;
}
