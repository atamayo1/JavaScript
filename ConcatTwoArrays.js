function UnirArrays(array1, array2) {
    return array1.concat(array2);
}
let names = ["Dominic", "Susana"];
let lastNames = ["Tamayo", "Rodriguez"];
let newArray = UnirArrays(names, lastNames);
console.log(newArray);