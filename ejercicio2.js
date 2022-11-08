/*
Ejercicio 2: Sumando los valores de un arreglo

Crear un array con 3 valores numericos y sumar todos esos valores accedendolos 
mediante las posiciones.

Al finalizar enviar un archivo o imagen con lo descrito anteriormente a 
tony.ospino@academlo.com
*/

const myArray = [10,10,5];

// Respuesta #1

function respuesta1(arr){

    let res = 0;

    for(let i = 0; myArray.length > i; i++){

        res += myArray[i];

    }

    return res;

}

console.log('respuesta 1 = \n',respuesta1(myArray))

// Respuesta #2

function respuesta2(arr){
    let res = 0;
    for(let i in myArray){
        console.log(i)
        res += myArray[i];
    }

    return res;

}

console.log('respuesta 2 = \n',respuesta2(myArray));

// Existen otras formas de hacer esto