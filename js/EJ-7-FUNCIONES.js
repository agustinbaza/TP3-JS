// PUNTO 7

let num = parseInt(prompt("Ingrese un número para ver su tabla"));

function tablas(num) {
  for (let i = 1; i <= 10; i++) {
    document.write(`${num} x ${i} = ${num * i} <br>`);
  }
}

if (isNaN(num)) {
    document.write("No ingreso un caracter valido");
  } else {
    console.log(tablas(num));
  }
  

