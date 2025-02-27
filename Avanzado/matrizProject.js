let matrizGastos = [
    [10000, 11000, 12000, 13000, 14000, 15000, 16000],  // Semana 1 → Fila 1
    [100000, 101000, 102000, 103000, 104000, 105000, 106000], // Semana 2 → Fila 2
    [20000, 21000, 22000, 23000, 24000, 25000, 26000],  // Semana 3 → Fila 3
    [50000, 51000, 52000, 53000, 54000, 55000, 56000]   // Semana 4 → Fila 4
];// Lune   Mart   Mier   Juev   Vier   Saba   Domi

function calcularGastosPorSemana(matrizGastos, numSemana) {
    if (numSemana < 0 || numSemana >= matrizGastos.length) {
        console.log("Número de semana inválido.");
        return;
    }
    let totalGastos = matrizGastos[numSemana].reduce((acc, gasto) => acc + gasto, 0);
    console.log(`Gastos de Semana ${numSemana + 1}: $${totalGastos}`);
}

calcularGastosPorSemana(matrizGastos, 0);

function calcularGastosPorDia(matrizGastos, numDia) {
    let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    if (numDia < 0 || numDia >= dias.length) {
        console.log("Número de día inválido.");
        return;
    }
    let totalGastos = matrizGastos.map(semana => semana[numDia]);
    let totalGastosPorDia = totalGastos.reduce((acc, gasto) => acc + gasto, 0);
    console.log(`Gastos del día ${dias[numDia]}: $${totalGastosPorDia}`);
}

calcularGastosPorDia(matrizGastos, 0);

function calcularGastosDelMes(matrizGastos) {
    let totalGastosPorMes = matrizGastos.flat().reduce((acc, gasto) => acc + gasto, 0);
    console.log("Total gastos por Mes: $" + totalGastosPorMes);
}

calcularGastosDelMes(matrizGastos);

function calcularGastosPorSemanaCallBack(matrizGastos, callback) {
    let totalGastosPorSemana = matrizGastos.map((semana, i) =>
        `Semana ${i + 1}: $${semana.reduce((acc, gasto) => acc + gasto, 0)}`
    );
    callback(totalGastosPorSemana);
}

function mostrarGastosPorSemana(listaGastos) {
    console.log("Gastos por semana:\n" + listaGastos.join("\n"));
}

calcularGastosPorSemanaCallBack(matrizGastos, mostrarGastosPorSemana);
