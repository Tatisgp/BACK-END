// 1. Leer un número y escribir el valor absoluto del mismo.

let numero = parseFloat(prompt("Ingresa un valor"));

let resultado ;
if (numero < 0 ) {
    resultado = numero * -1;
} else { 
    resultado = numero;
}

document.writeln(resultado);

