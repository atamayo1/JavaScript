let persona = {
    nombre: "Anthony Tamayo Ortega",
    edad: 30,
    ocupacion: "Software Developer",
}

persona.habilidad = "Frontend Developer";

console.log(persona);

persona.ubicacion = {
    codigoPostal: 7600,
    ciudad: "Cali",
    calle: "60B",
    numero: "107"
};

function DeleteItem(item, keyToDelete) {
    delete item[keyToDelete];
    return item;
}

let newObject = DeleteItem(persona, "edad");

console.log(newObject);