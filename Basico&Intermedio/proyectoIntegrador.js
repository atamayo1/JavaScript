// Array para almacenar tareas
let prompt = require("prompt-sync")({ sigint: true });
let tareas = [];

// Agregar tarea
function agregarTarea(nameRequest, limitDateRequest = null) {
    tareas.push({ name: nameRequest, complete: false, limitDate: limitDateRequest });
}

// Eliminar tarea
function eliminarTarea(tarea) {
    if (tareas.length > 0) {
        tareas.splice(tareas.indexOf(tarea), 1);
        console.log("Tarea eliminada correctamente")
    }
}

// Completar tarea
function completarTarea(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].complete = true;
        console.log("Tarea marcada como correcta");
    } else {
        console.log("Indice de Tarea invalido");
    }
}

// Funcion para modificar una tarea especifica 
function modificarTarea(indice, newName, newLimitDate = null) {
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].name = newName;
        if (newLimitDate !== null) {
            tareas[indice].limitDate = newLimitDate;
        }
        console.log("Tarea modificada con exito");
    } else {
        console.log("Indice de tarea no valido");
    }
}

function mostrarMenu() {
    console.log(" --- Menu --- ");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Marcar tarea como completada");
    console.log("4. Modificar tarea");
    console.log("5. Mostrar todas las tareas");
    console.log("0. Salir");
}

function interactuarConUsuario() {
    let opcion = -1;

    while (opcion != 0) {
        mostrarMenu();
        opcion = parseInt(prompt("Ingrese la opcion seleccionada:"));

        switch (opcion) {
            case 1:
                let newName = prompt("Ingrese el nombre de la tarea a cargar: ");
                agregarTarea(newName);
                break;

            case 2:
                let nameToDelete = prompt("Ingrese el nombre de la tarea a eliminar: ");
                eliminarTarea(nameToDelete);
                break;

            case 3:
                let indexToComplete = parseInt(prompt("Ingrese el indice de la tarea a completar: "));
                completarTarea(indexToComplete);
                break;
            case 4:
                let indexToModify = parseInt(prompt("Ingrese el indice de la tarea a modificar: "));
                let nameToModify = prompt("Ingrese el nombre de la tarea a modificar: ");
                modificarTarea(indexToModify, nameToModify);
                break;
            case 5:
                console.log(" -- Lista de tareas -- ")
                console.log(tareas)
                break;
            default:
                break;
        }
    }
}

interactuarConUsuario();