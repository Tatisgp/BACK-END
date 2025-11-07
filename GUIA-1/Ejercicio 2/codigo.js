// Hacer un programa que imprima el nombre de un artículo, clave, precio original y
// su precio con descuento. El descuento lo hace en base a la clave, si la clave es
// 01 el descuento es del 10% y si la clave es 02 el descuento en del 20% (solo
// existen dos claves).

let nombre = prompt ("Ingresa el nombre de un articulo");
let clave = prompt("Ingresa la clave");
let precio = parseFloat(prompt("Ingresa el precio original "));

let descuento, resultado;
if (clave == "01") {
    descuento = 10;
    resultado = precio - (descuento * precio) / 100;
} else if (clave == "02") {
    descuento = 20;
    resultado = precio - (descuento * precio) / 100;
} else {
    descuento = 0;
    resultado = precio
}

document.writeln(`nombre del producto:   ${nombre} <p> `);
document.writeln(`clave:   ${clave} <p>`);
document.writeln(`precio original:   ${precio} <p>`);
document.writeln(`precio con descuento:   ${resultado} <p>`); 

