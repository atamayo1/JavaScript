// BubbleSort
function bubbleSort(array = []) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    console.log("Ordered", array)
}
const newArrayBubble = [8, 4, 2, 9, 5, 7, 85, 1, 3];
bubbleSort(newArrayBubble);

// Ordenamiento si es Ascendente o no
function checkOrderAsc(array = []) {
    for (let index = 0; index < array.length - 1; index++) {
        if (array[index] > array[index + 1]) {
            console.log("Is Not Ascending", array);
            return;
        }
    }
    console.log("Ascending", array);
}
const newArrayToCheck = [1, 2, 3, 4, 5];
checkOrderAsc(newArrayToCheck);

// Contar cantidad de veces que aparece un numero en un array
function countNumber(numero = 0, array = []) {
    let count = 0;
    for (let index = 0; index < array.length - 1; index++) {
        if (array[index] === numero) {
            count = count + 1;
        }
    }
    console.log(`El numero de veces que se repite el numero ${numero} es: ${count} veces`);
}
const numberToCount = 2;
const arrayToCount = [1, 2, 2, 3, 4, 5, 6, 2, 7, 8, 9];
countNumber(numberToCount, arrayToCount);

// Obtener votos dependiendo del nombre del tema
function getVotesByName(name = "", array = [{ name: "", votes: 0 }]) {
    let votes = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.name.trim().toLowerCase() === name.trim().toLowerCase()) {
            votes = element.votes;
        }
    }
    console.log("Los votos del nombre del tema '" + name + "' son: " + votes + " votos")
}
const nameToCheckVotes = "segun quien";
const arrayToCheckVotes = [
    { name: "que mas puedo pedir", votes: 10 },
    { name: "te extraño", votes: 7 },
    { name: "eres", votes: 5 },
    { name: "el amor de mi vida", votes: 9 },
    { name: "segun quien", votes: 9 }
];
getVotesByName(nameToCheckVotes, arrayToCheckVotes);