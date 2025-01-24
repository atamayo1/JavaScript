function DeleteFirstItem(array) {
    let itemDeleted = array.shift();
    console.log("This item was delete: " + itemDeleted);
    return array;
}

let cities = ["Cali", "Bogotá", "Medellín"];

let newArray = DeleteFirstItem(cities)

console.log("New array: ", newArray);