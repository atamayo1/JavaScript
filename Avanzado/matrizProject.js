let matrizGastos = [
    [10, 20, 30, 40, 50, 60, 70],  // Semana 1 → Fila 1
    [5, 15, 25, 35, 45, 55, 65], // Semana 2 → Fila 2
    [8, 18, 28, 38, 48, 58, 68],  // Semana 3 → Fila 3
    [12, 22, 32, 42, 52, 62, 72]   // Semana 4 → Fila 4
];// Lune   Mart   Mier   Juev   Vier   Saba   Domi
//   Col1   Col2   Col3   Col4   Col5   Col6   Col7

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
