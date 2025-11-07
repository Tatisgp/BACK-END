// Almacenar 500 números en un vector, elevar al cuadrado cada valor
// almacenado en el vector, y almacenar el resultado en otro vector. Imprimir
// el vector original y el vector resultante.



let valores = [];
let resultado = [];

for (let i = 0; i < 5; i++){
    let numero = parseFloat(prompt("ingrese el numero"));
    valores.push(numero);

    let potencia = numero * numero;
    resultado.push(potencia);

}

 document.writeln(`Vector original:   ${valores} <p> `); 
 document.writeln(`Vector resultante:   ${resultado} <p> `); 