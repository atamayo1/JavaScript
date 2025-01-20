let pesoDolarValue = 4333;
let pesoEuroValue = 4483;

function convertMoney(money, from, to) {
    if (money <= 0) {
        console.log("The value need to be greater than 0");
        return;
    }

    if (!from || !to || from === to) {
        console.log("The type of 'from' and 'to' need to be different than blank, for example, USA, COP, EUR, etc");
        return;
    }

    let conversionRate;
    switch (from) {
        case 'USA':
            conversionRate = pesoDolarValue;
            break;
        case 'COP':
            conversionRate = 1 / pesoDolarValue;
            break;
        case 'EUR':
            conversionRate = pesoEuroValue;
            break;
        default:
            console.log("Invalid 'from' currency");
            return;
    }

    let convertedAmount;
    switch (to) {
        case 'USA':
            convertedAmount = money * conversionRate;
            break;
        case 'COP':
            convertedAmount = money / conversionRate;
            break;
        case 'EUR':
            convertedAmount = money * conversionRate;
            break;
        default:
            console.log("Invalid 'to' currency");
            return;
    }

    console.log(`The ${money} ${from} in ${to} is ${convertedAmount}`);
}

convertMoney(100000, 'COP', 'USA');