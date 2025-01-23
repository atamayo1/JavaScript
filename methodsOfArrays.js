'use strict';
// .push()
console.log("");
console.log("Push method: ");
let colors = ["Rojo", "Naranja", "Azul"];

colors.push("Violeta");
console.log(colors);

colors.push("Gris", "Dorado");
console.log(colors);
// .pop()
console.log("");
console.log("Pop method: ");
let deletedColor = colors.pop();
console.log(colors);
console.log("Deleted color: ", deletedColor);
// .shift()
console.log("");
console.log("Shift method: ");
let names = ["Samuel", "Anthony", "Dominic", "Susana"];
let nameDeleted = names.shift();

console.log(names);
console.log("Deleted names: ", nameDeleted);
// .unshift()
console.log("");
console.log("Unshift method: ");
let brands = ["Nike", "Mercedes", "Adidas", "Crocs"];
let brandsNewLen = brands.unshift("Audi");

console.log(brands);
console.log("Added brand on the position 0 of the array: ", brands[0]);
console.log("Brands new length: ", brandsNewLen)
// .join()
console.log("");
console.log("Join method: ");
let days = ["Sun", "Mon", "Tue", "Wed", "Thu"];

let spacesByComma = days.join();
console.log("Separated the array by commas", spacesByComma);

let spacesByDash = days.join(" - ");
console.log("Separated the array by dashes", spacesByDash);

// .indexOf()
console.log("");
console.log("IndexOf method: ");
let fruits = ["Manzana", "Banana", "Sandía"];
let indexFounded = fruits.indexOf("Banana");
console.log("The position of the index is: " + indexFounded);

// .lastIndexOf()
let clubs = ["Racing", "Boca", "Lanus", "Boca"];

let positionFounded = clubs.lastIndexOf("Boca");
console.log("The position of the last index is: " + positionFounded)

// .includes()
let otherFruits = ["Manzana", "Banana", "Sandía"];
console.log("The fruit Manzana exist", otherFruits.includes("Manzana"));