// Strings y accesos unicos
let saludo = "Hola!";

console.log(saludo[4]);

// .length
let miSerie = "Mad Men";
console.log(miSerie.length);

// .indexOf()
console.log(saludo.indexOf("o"));
console.log(saludo.indexOf("la"));

// .slice()
let frase = "Hola!, ¿Como estas?";

// Opcion 1
console.log(frase.slice(6, 11));

// Opcion 2
console.log(frase.slice(6));

// Opcion 3
console.log(frase.slice(-10));

// .trim()
let fullName = "   Homero Simpson   ";
console.log(fullName.trim());

// .split()
let newArray = frase.split(",");
console.log(newArray);

// .replace()
let nuevaFrase = "Me encanta Java";
let fraseFinal = nuevaFrase.replace("Java", "JavaScript");
console.log(fraseFinal);