// .slice();
// Sintaxis: let newArray = arrayOriginal.slice(inicio, fin);

let newArray = ["a", "b", "c", "d", "e"]
let primerasTres = newArray.slice(0, 3);
console.log("primeras Tres", primerasTres);

// .slice();
// Sintaxis: let newArray = arrayOriginal.slice(inicio, cantidadAEliminar, element1, element2, ...));

let months = ["January", "February", "March", "April", "May"];
months.splice(1, 2, "NuevoMes1", "NuevoMes2");
console.log("months", months);

// .sort()
// Sintaxis: let newArray = arrayOriginal.sort() 

let numeros = [5, 4, 8, 1, 6, 9];
numeros.sort((a, b) => (a - b));
console.log("numeros", numeros);

let palabras = ["perro", "gato", "auto", "zorro"];
palabras.sort((a, b) => a.localeCompare(b));
console.log("palabras", palabras);

// .find()
// Sintaxis: let newArray = arrayOriginal.find(functionTest(element));
let edades = [25, 18, 30, 15, 22];
let mayorDeEdad = edades.find((edad) => edad >= 18);
console.log("mayorDeEdad", mayorDeEdad);

//.map()
let newNums = [2, 4, 8];
let newNumsMultiply = newNums.map((num) => num * 2);
console.log("newNumsMultiply", newNumsMultiply);

// .filter()
let ages = [22, 8, 17, 14, 30];
let mayores = ages.filter((age) => age >= 18);
console.log("mayores", mayores);

// .reduce()
// reducir los elementos bajo uno solo , dependiendo de la indicacion
let nums = [5, 7, 16];
let sum = nums.reduce((acum, num) => acum + num);
console.log("sum", sum);

// .forEach()
let paises = ["Argentina", "Colombia", "Brasil"];
paises.forEach((pais) => console.log("pais", pais));