// PUNTO 6 

let a = parseInt(prompt("Ingrese valor del lado a"));
let b = parseInt(prompt("Ingrese valor del lado b"));

function perimetro(a,b) {
    let perimetro = 2*(a+b);
    return perimetro;
}

if (isNaN(a) && isNaN(b) || isNaN(a) && !isNaN(b) || !isNaN(a) && isNaN(b)) {
    document.write("No se ingresarón caracteres validos");
  } else {
    console.log(`El perimetro es ${perimetro(a,b)}`);
    document.write(`El perimetro es: ${perimetro(a,b)}`);
  }

  