function evaluateRangeAge(age) {
    if (age >= 6 && age <= 11) {
        console.log("El rango de edad indica que es un niño");
    }
    if (age >= 12 && age <= 18) {
        console.log("El rango de edad indica que es un adolescente");
    }
    if (age >= 14 && age <= 26) {
        console.log("El rango de edad indica que es un adulto joven");
    }
    if (age >= 27 && age <= 59) {
        console.log("El rango de edad indica que es un adulto");
    }
    if (age >= 60) {
        console.log("El rango de edad indica que es una persona mayor");
    }
}

evaluateRangeAge(30);