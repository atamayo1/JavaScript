let prompt = require("prompt-sync")({ sigint: true });
function suma(num1, num2) {
    let result = num1 + num2;
    return result;
}

let resultSuma = suma(1, 2);
// console.log("Resultado suma: " + resultSuma);

function resta(num1, num2) {
    let result = num1 - num2;
    return result;
}

let resultResta = resta(10, 2);
// console.log("Resultado resta: " + resultResta);

function multiplicar(num1, num2) {
    let result = num1 * num2;
    return result;
}

let resultMultiplicar = multiplicar(10, 2);
// console.log("Resultado multiplicacion: " + resultMultiplicar);

function dividir(num1, num2) {
    if (num2 !== 0) {
        let result = num1 / num2;
        return result;
    } else {
        console.log("No podemos dividir un numero por 0, debe elegir otro valor")
    }
}

let resultDividir = dividir(10, 2);
// console.log("Resultado dividir: " + resultDividir);

console.log("Bienvenido a su calculadora digital!!");
console.log("Indique que operacion desea realizar: ");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicar");
console.log("4. Division");

let operation = prompt("Seleccione la operación: ");
let num1 = Number(prompt("Escriba el numero 1: "));
let num2 = Number(prompt("Escriba el numero 2: "));

function handleOperation(input) {
    switch (input) {
        case "1":
            return suma(num1, num2);
        case "2":
            return resta(num1, num2);
        case "3":
            return multiplicar(num1, num2);
        case "4":
            return dividir(num1, num2);
        default:
            break;
    }
}

console.log("El resultado de la operación es: ", handleOperation(operation));

