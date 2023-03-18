// PUNTO 3

let = apariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let tiros = 1; tiros <= 50; tiros++) {
  let dado1 = Math.trunc(Math.random() * 6 + 1);

  let dado2 = Math.trunc(Math.random() * 6 + 1);

  let suma = dado1 + dado2;

  apariciones[suma - 2]++;
}

for (let i = 0; i < apariciones.length; i++) {
  document.write(`<p> La suma ${i + 2} aparecio ${apariciones[i]} veces </p>`);
}


