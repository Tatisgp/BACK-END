// 6.Se tiene almacenada la matriz M (50,5) la cual contiene la información sobre las
// calificaciones de la materia de LENGUAJES ALGORITMICOS. Esta información,
// es el código estudiantil del alumno, Calificación 1, Calificación 2, Calificación 3,
// Calificación final.
// Escriba un programa que imprima:
// A).-Cantidad de alumnos que aprobaron la materia(Para aprobar, entre 3.0 y
// 5.0) .
// B).-Cantidad de alumnos que tienen derecho a recuperar(para recuperación,
// promedio Calificación final entre 2.0 y 2.9).
// C).-El número de alumnos que hayan, obtenido la máxima Calificación
// final(Calificación final igual a 5.0).

// Notas:
// • Las notas deben estar entre 1.0 y 5.0, se debe controlar, que esté la
// calificación en este
// rango.
// • La Calificación final, debe ser obtenida, del promedio de las tres
// calificaciones
// anteriores ingresadas, no es un dato de entrada.

let matriz=[];
let cantidad= 5;
let codigo, calificacion1, calificacion2, calificacion3, calificacion_final;

notas();
function notas(){
    for (let i = 0; i < cantidad; i++){
        codigo = parseFloat(prompt("ingrese el codigo"));
        calificacion1 = parseFloat(prompt("ingrese la calificación 1"));
        if (calificacion1 < 1.0 || calificacion1 > 5.0) {
            alert("La calificación 1 debe estar entre 1.0 y 5.0");
            return;
        } 

        calificacion2 = parseFloat(prompt("ingrese la calificación 2"));
        if (calificacion2 < 1.0 || calificacion2 > 5.0) {
            alert("La calificación 2 debe estar entre 1.0 y 5.0");
            return;

        } 

        calificacion3 = parseFloat(prompt("ingrese la calificación 3"));
        if (calificacion3 < 1.0 || calificacion3 > 5.0) {
            alert("La calificación 3 debe estar entre 1.0 y 5.0");
            return;

        } 
        let promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

        matriz.push ([codigo, calificacion1, calificacion2, calificacion3, promedio]);


    }
    let reprobado = 0;
    let aprobada = 0;
    let recuperación = 0;
    let maxima = 0;

    for (let i = 0; i<matriz.length; i++){
        if (matriz [i][4] >= 3.0 && matriz [i][4] <= 5.0){
            aprobada +=1;
        }

        if (matriz [i][4] >= 2.0 && matriz [i][4] <= 2.9){
            recuperación+=1;
        }

        if (matriz [i][4] == 5.0){
            maxima +=1;
        }

        if (matriz [i][4] >= 1.0 && matriz [i][4] <= 1.9){
            reprobado +=1;
        }

    }

    document.writeln(`Alumnos aprovados:   ${aprobada} <p> `); 
    document.writeln(`Alumnos con derecho a recuperar:   ${recuperación} <p> `); 
    document.writeln(`Alumnos con máxima calificación:   ${maxima} <p> `); 
    document.writeln(`Alumnos reprobados:   ${reprobado} <p> `); 

}


    