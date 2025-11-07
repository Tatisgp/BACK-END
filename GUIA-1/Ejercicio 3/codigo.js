// En un supermercado se hace una promoción, mediante la cual el cliente obtiene
// un descuento dependiendo de un número que se escoge al azar. Si el número
// escogido es menor que 74 el descuento es del 15% sobre el total de la compra,
// si es mayor o igual a 74 el descuento es del 20%. Obtener cuánto dinero se le
// descuenta.

let producto = prompt("Ingrese el nombre del producto");
let precio = parseFloat(prompt("Ingrese el precio del producto"));
let numeroazar = Math.floor(Math.random()*100)+1;
let descuento, preciodes;
let resultado;


if( precio <= 0){
    alert("El precio no es correcto");

}

if (numeroazar < 74) {
    descuento = 15;
    preciodes = (descuento * precio) /100;
    resultado = precio - (descuento * precio) /100;
} else if (numeroazar >=74) {
    descuento = 20;
    preciodes = (descuento * precio) /100;
    resultado = precio - (descuento * precio) /100;
}


document.writeln(`precio original:   ${precio} <p> `);
document.writeln(`valor a descontar:   ${preciodes} <p>`);
document.writeln(`precio con descuento:   ${resultado} <p>`); 