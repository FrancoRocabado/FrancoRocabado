 function pedirNumero() {
  do {
      let numero = window.prompt('Digite un número:', '0');

      if (!Number.isNaN(Number(numero))) {
          return parseInt(numero);
      }
  } while (true);
}

window.onload = function() {
  let numero1 = pedirNumero();
  let numero2 = pedirNumero();

  let suma = numero1 + numero2;

  document.getElementById('resultado').innerText = suma;
}



