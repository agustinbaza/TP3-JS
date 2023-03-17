// PUNTO 2

let ciudades = [];

do {
  let ciudad = prompt("Ingrese el nombre de una ciudad").toUpperCase();
  ciudades.push(ciudad);
} while (confirm("Desea agregar otra ciudad?"));

document.write("<h4> Ciudades </h4>");
document.write("<ul>");
for (let i = 0; i < ciudades.length; i++) {
  document.write(`<li>${ciudades[i]}</li>`);
}
document.write("</ul>");

// Mostrar la longitud del arreglo.
document.write("<h4>Longitud del arreglo </h4>");
document.write(`La longitud del array es: ${ciudades.length}`);

// Mostrar el item de la primera,tercera y ultima posicion.
document.write("<h4>Items de primera, tercera y última posición </h4>");
document.write("<ul>");
document.write(`<li>${ciudades[0]}</li>`);
document.write(`<li>${ciudades[2]}</li>`);
document.write(`<li>${ciudades[ciudades.length - 1]}</li>`);
document.write("</ul>");

// Añadir Paris en la ultima posicion.
ciudades.push("PARIS");
document.write('<h4> Agregamos "Paris" al final del array </h4>');
document.write("<ul>");
for (let i = 0; i < ciudades.length; i++) {
  document.write(`<li>${ciudades[i]}</li>`);
}
document.write("</ul>");

// Mostrar el item de la segunda posicion.
document.write("<h4> Items de la segunda posición. </h4>");
document.write(`<li>${ciudades[1]}</li>`);

// Reemplazamos el item de la segunda posicion por "Barcelona".
ciudades[1] = 'BARCELONA';
document.write('<h4> Cambiamos un item de la posicion 2 del array </h4>')
document.write("<ul>");
for (let i = 0; i < ciudades.length; i++) {
  document.write(`<li>${ciudades[i]}</li>`);
}
document.write("</ul>");
