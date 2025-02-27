// semanas x días
let matrizGastos = [
    [10000, 100000, 20000, 50000], // Semana 1 x Lunes
    [11000, 101000, 21000, 51000], // Semana 2 x Martes
    [12000, 102000, 22000, 52000], // Semana 3 x Miercoles
    [13000, 103000, 23000, 53000], // Semana 4 x Jueves
    [14000, 104000, 24000, 54000], // Semana 5 x Viernes
    [15000, 105000, 25000, 55000], // Semana 6 x Sabado
    [16000, 106000, 26000, 56000], // Semana 7 x Domingo
];


function calcularGastosPorSemana(matrizGastos, numSemana) {
    let totalGastos = matrizGastos[numSemana].reduce((acc, gasto) => acc + gasto, 0);
    console.log(`Gastos de Semana ${numSemana + 1}: $${totalGastos}`);
}

calcularGastosPorSemana(matrizGastos, 0);

function calcularGastosPorDia(matrizGastos, numDia) {
    let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    let totalGastos = matrizGastos.map(semana => {
        return semana[numDia];
    });
    let totalGastosPorDia = totalGastos.reduce((acc, gasto) => acc + gasto, 0)
    console.log(`Gastos del día ${dias[numDia]}: $${totalGastosPorDia}`);
}

calcularGastosPorDia(matrizGastos, 0);

function calcularGastosDelMes(matrizGastos) {
    let totalGastosPorSemana = matrizGastos.map((semana, i) => {
        return semana.reduce((acc, gasto) => acc + gasto, 0);
    });
    let totalGastosPorMes = totalGastosPorSemana.reduce((acc, gasto) => acc + gasto, 0);
    console.log("Total gastos por Mes: $" + totalGastosPorMes);
}

calcularGastosDelMes(matrizGastos);

function calcularGastosPorSemanaCallBack(matrizGastos, callbacks) {
    let totalGastosPorSemana = matrizGastos.map((semana, i) => {
        return `Semana ${i + 1}: ` + semana.reduce((acc, gasto) => acc + gasto, 0);
    });
    callbacks(totalGastosPorSemana);
}

function mostrarGastosPorSemana(element) {
    console.log("Gastos por semana", element);
}

calcularGastosPorSemanaCallBack(matrizGastos, mostrarGastosPorSemana);