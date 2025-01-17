let pesoValue = 4300;

function convertMoney(money, from, to) {
    if (money > 0 && from === 'USA' && to === 'COP') {
        let dolarConverted = Math.round(money) * pesoValue;
        console.log("The " + money + " dolars in peso is " + dolarConverted)
    } else if (money > 0 && from === 'COP' && to === 'USA') {
        let pesoConverted = Math.round(money) / pesoValue;
        console.log("The " + money + " pesos in dolar is " + pesoConverted)
    } else if ((from !== '' && money < 0) || (to !== '' && money < 0)) {
        console.log("The value need to be greater than 0");
    } else if ((from === undefined && money > 0) || (from === '' && money > 0) || (to === undefined && money > 0) || (to === '' && money > 0)) {
        console.log("The type of 'from' and 'to' need to be different than blank , for example , USA , COP , EUR , etc");
    }
}

convertMoney(100000, 'COP', 'USA');