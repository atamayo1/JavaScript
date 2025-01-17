function calculateIMC(weight, height) {
    let IMC = weight / (height ** 2);
    if (IMC < 18.5) {
        console.log("Su peso esta en el rango de bajo peso y su IMC es " + IMC);
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        console.log("Su peso es normal y su IMC es " + IMC);
    } else if (IMC >= 25.0 && IMC <= 29.9) {
        console.log("Su peso esta en el rango de sobrepeso y su IMC es " + IMC);
    } else if (IMC >= 30.0) {
        console.log("Su peso esta en el rango de obesidad y su IMC es " + IMC);
    }
}

calculateIMC(70, 1.70);