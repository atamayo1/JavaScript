// BubbleSort
function bubbleSort(array = []) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    console.log("Ordered", array)
}

bubbleSort([1, 2, 3, 4, 5]);

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

checkOrderAsc([1, 2, 3, 4, 5]);