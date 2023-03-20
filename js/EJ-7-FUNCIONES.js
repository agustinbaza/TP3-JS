// PUNTO 7

let num = parseInt(prompt("Ingrese un número para ver su tabla"));

function tablas(num) {
  for (let i = 1; i <= 10; i++) {
    document.write(`${num} x ${i} = ${num * i} <br>`);
  }
}

console.log(tablas(num));
