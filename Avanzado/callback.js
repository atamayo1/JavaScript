// funcion que recorre array y ejecuta un callbacks
function processArray(array, callbacks) {
    array.forEach((element) => {
        callbacks(element);
    });
}

// funcion de callbacks que muestren los elementos del array
function showElements(element) {
    console.log("Show element", element);
}
function multiplicarPorDos(element) {
    console.log("Show element per 2", element * 2);
}
function calcularCuadrado(element) {
    console.log("Show element al cuadrado", element ** 2);
}

// crear array
let myArray = [1, 2, 3, 4, 5];

processArray(myArray, showElements);

processArray(myArray, multiplicarPorDos);

processArray(myArray, calcularCuadrado);