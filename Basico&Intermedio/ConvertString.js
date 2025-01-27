function ConvertString(str) {
    return str.toUpperCase() + " " + str.toLowerCase();
}

let firstName = "Anthony";

let strConverted = ConvertString(firstName);

console.log(strConverted);