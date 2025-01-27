let persona = {
    name: "Anthony",
    lastName: "Tamayo Ortega",
    age: 30,
    cellPhone: "+573216376699",
    saludar: function () {
        return "Hola, como estas, soy " + this.name + " " + this.lastName;
    }
}

// cargar una nueva propiedad
persona.Sport = "Futbol";
persona.age = 31;
console.log(persona);

// eliminar una nueva propiedad
delete persona.Sport;
console.log(persona);
// Acceder a un metodo de un objeto
persona.name = "Dominic";
persona.lastName = "Tamayo Rodriguez";
let saludando = persona.saludar();
console.log(saludando);