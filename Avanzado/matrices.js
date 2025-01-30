// crear una matriz

// opcion 1
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.table(matriz);

// opcion 2
let arrayMatriz = [];

let fila1 = ["x0", "x1", "x2"];
let fila2 = ["y0", "y1", "y2"];

arrayMatriz[0] = fila1;
arrayMatriz[1] = fila2;

console.table(arrayMatriz);

// acceder a un elemento
console.log(matriz[1][1]);

// modificar elemento especifico
/* matriz[0][1] = 77;
console.table(matriz); */

// Recorrer una matriz con una columna especifica
console.log("columna posicion 0")
matriz.forEach((element, i) => {
    console.log(matriz[i][0]);
});

// Recorrer una matriz con una fila especifica
console.log("fila posicion 0")
matriz.forEach((element, i) => {
    console.log(matriz[0][i]);
});

// Recorrer la totalidad de datos de la matriz
console.log("todos los datos de la matriz");
matriz.forEach((element1, i) => { // Filas
    matriz.forEach((element2, j) => { // Columnas
        console.log(matriz[i][j]);
    });
});

// filtrar en matrices
matriz.forEach((element1, i) => {
    matriz.forEach((element2, j) => {
        if (matriz[i][j] % 2 === 0) {
            console.log("par: " + matriz[i][j])
        } else {
            console.log("impar: " + matriz[i][j])
        }
    });
});