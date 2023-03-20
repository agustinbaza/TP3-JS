// PUNTO 4

let num = parseInt(prompt("Ingrese un número"));

function paridad(num) {
  if (num % 2 === 0) {
    document.write("El número es par");
  } else {
    document.write("El número es impar");
  }
}

if (isNaN(num)) {
  document.write("No ingreso un caracter valido");
} else {
  console.log(paridad(num));
}
