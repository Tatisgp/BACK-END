// La Cía. MAZDA premia anualmente a sus mejores vendedores de acuerdo a la
// siguiente tabla:

// Si vendió Le corresponde de Comisión sobre ventas totales
// 1000000 <= venta < 3000000 3%
// 3000000 <= venta < 5000000 4%
// 5000000 <= venta < 7000000 5%
// 7000000 <= venta < 10000000 6%
// Diseñar un programa que lea las ventas de 100 vendedores y que escriba la
// comisión anual que le corresponda a cada vendedor. Nota ningún vendedor vende
// más de 10000000 al año.

let valores = [];
let comisiones = [];
let valDes = [];

for (let i = 0; i < 5; i++) {
    let valorVenta = parseFloat(prompt("ingrese el valor de la venta:"));
    valores.push(valorVenta);

    let descuento;
    let resultado;

    if (valorVenta >= 10000000) {
        alert ("Valor no correspondido");

    } else{
        if(valorVenta <1000000) {
            comision = 0;
            comisiones.push(comision);
            resultado = valorVenta * comision;

            valDes.push(resultado);

        } else {
            if (valorVenta >= 1000000 && valorVenta < 3000000) {
                descuento = 0.03;
                comisiones.push(descuento);
                resultado = valorVenta * descuento;

                valDes.push(resultado);        

            } else  if (valorVenta >= 3000000 && valorVenta < 5000000) {
                descuento = 0.04;
                comisiones.push(descuento);
                resultado = valorVenta * descuento;

                valDes.push(resultado);

            } else if (valorVenta >= 5000000 && valorVenta < 7000000) {
                descuento = 0.05;
                comisiones.push(descuento);
                resultado = valorVenta * descuento;

                valDes.push(resultado);

        } else if (valorVenta >= 7000000 && valorVenta < 10000000) {
                descuento = 0.06;
                comisiones.push(descuento);
                resultado = valorVenta * descuento;

                valDes.push(resultado);
    }
}
}
}

for (let i = 0; i < 5; i++) {

    let valores1 = valores [i];
    let comisiones2 = comisiones [i];
    let valDes3 = valDes [i];
    
    document.writeln(`Valor venta:   ${valores1} <p> `); 
    document.writeln(`Valor descuento:   ${comisiones2 * 100}%  <p> `); 
    document.writeln(`Comision anual:   ${valDes3} <p> `); 
    
    document.writeln(`<br></br>`); 
}
