// PUNTO 5

let texto = prompt("Ingrese el texto");

function tipo(texto) {
  if (texto === texto.toUpperCase()) {
    document.write("El texto esta en mayúsculas");
  } else if (texto === texto.toLowerCase()) {
    document.write("El texto esta en minúsculas");
  } else {
    document.write("El texto tiene ambas");
  }
}

if (isNaN(texto)) {
    console.log(tipo(texto));
  } else {
    document.write("No se admiten solo números");
  }
