// Array para almacenar tareas
let prompt = require("prompt-sync")({ sigint: true });
let tareas = [];
let categoriasNombres = [
    "Trabajo",
    "Personal",
];

function mostrarTodasLasCategorias() {
    categoriasNombres.forEach((categoria, indice) => {
        console.log(indice + ": " + categoria);
    });
}

function agregarNuevaCategoriaPorElUsuario(nombreCategoria) {
    categoriasNombres.push(nombreCategoria);
    console.log("Categoría " + nombreCategoria + " agregada correctamente");
}

// Agregar tarea
function agregarTarea(nameRequest, limitDateRequest = null) {
    mostrarTodasLasCategorias();
    let numeroCategoria = parseInt(prompt("Ingrese el numero de la categoria para la nueva tarea: "));
    if (numeroCategoria >= 0 && numeroCategoria < categoriasNombres.length) {
        tareas.push({ name: nameRequest, complete: false, limitDate: limitDateRequest, categoria: numeroCategoria });
        console.log("Tarea agregada correctamente");
    } else {
        console.log("Numero de la categoria incorrecto");
    }
}

// Eliminar tarea
function eliminarTarea(tarea) {
    if (tareas.length > 0) {
        tareas.splice(tareas.indexOf(tarea), 1);
        console.log("Tarea eliminada correctamente");
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
function modificarTarea(indice, newName, newLimitDate = null, nuevoNumeroCategoria) {
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].name = newName !== undefined ? newName : tareas[indice].name;
        tareas[indice].limitDate = newLimitDate !== undefined ? newLimitDate : tareas[indice].limitDate;
        tareas[indice].categoria = nuevoNumeroCategoria !== undefined ? nuevoNumeroCategoria : tareas[indice].categoria;
        console.log("Tarea modificada con exito");
    } else {
        console.log("Indice de tarea no valido");
    }
}

function filtrarTareasPorCategoria(numeroCategoria) {
    let tareasFiltradas = tareas.filter((tarea) => tarea.categoria === numeroCategoria);
    return tareasFiltradas;
}

function contarTareasCompletadasPorCategoria(numeroCategoria) {
    let tareasCategoria = filtrarTareasPorCategoria(numeroCategoria);
    let tareasCompletadas = tareasCategoria.filter((tarea) => tarea.complete === true);
    return tareasCompletadas.length;
}

function mostrarTareasNoCompletadas() {
    console.log("Tareas no completadas: ");
    tareas.forEach(function (tarea) {
        if (!tarea.complete) {
            console.log("- Nombre: " + tarea.nombre + ", Categoria: " + categoriasNombres[tarea.categoria]);
        }
    })
}

function mostrarMenu() {
    console.log(" --- Menu --- ");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Marcar tarea como completada");
    console.log("4. Modificar tarea");
    console.log("5. Mostrar todas las tareas");
    console.log("6. Ver todas las categorias");
    console.log("7. Agregar nueva categoria");
    console.log("8. Filtrar tareas por categoria");
    console.log("9. Visualizar cantidad de tareas completadas por categoria");
    console.log("10. Visualizar todas las tareas no completadas");
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
                if (indexToModify >= 0 && indexToModify < tareas.length) {
                    let opcion = parseInt(prompt("¿Que propiedad desea modificar? 1. Nombre, 2. Fecha limite, 3. Numero de categoria: "));
                    switch (opcion) {
                        case 1:
                            let nombre = prompt("Cual es el nuevo nombre para la tarea: ");
                            modificarTarea(indexToModify, nombre);
                            break;
                        case 2:
                            let fechaLimite = prompt("Cual es la nueva fecha limite para la tarea: ");
                            modificarTarea(indexToModify, undefined, fechaLimite);
                            break;
                        case 3:
                            mostrarTodasLasCategorias();
                            let categoria = parseInt(prompt("Cual es el numero de la categoria para la tarea: "));
                            if (categoria >= 0 && categoria < categoriasNombres.length) {
                                modificarTarea(indexToModify, undefined, undefined, categoria);
                            }
                            break;
                        default:
                            break;
                    }
                    console.log("Tarea modificada con exito");
                } else {
                    console.log("Indice de la tarea incorrecto");
                }
                break;
            case 5:
                console.log(" -- Lista de tareas -- ")
                console.log(tareas)
                break;
            case 6:
                mostrarTodasLasCategorias();
                break;
            case 7:
                let newNameCategory = prompt("Ingrese el nombre de la nueva categoria a agregar: ");
                agregarNuevaCategoriaPorElUsuario(newNameCategory);
                break;
            case 8:
                mostrarTodasLasCategorias();
                let numeroCategoria = parseInt(prompt("Ingrese el numero de la categoría con la cual va a filtrar la lista de tareas: "));
                if (numeroCategoria > 0 && numeroCategoria <= categoriasNombres.length) {
                    let tareasFiltradas = filtrarTareasPorCategoria(numeroCategoria);
                    console.log("Tareas filtradas por categoria " + categoriasNombres[numeroCategoria] + ": ", tareasFiltradas);
                }
            case 9:
                mostrarTodasLasCategorias();
                let numCategory = parseInt(prompt("Ingrese el numero de la categoría a visualizar: "));
                if (numCategory > 0 && numCategory <= categoriasNombres.length) {
                    let tareasCompletadas = contarTareasCompletadasPorCategoria(numCategory);
                    console.log("Cantidad de tareas completadas filtradas por categoria " + categoriasNombres[numCategory] + ": ", tareasCompletadas);
                }
                break;
            case 10:
                mostrarTareasNoCompletadas();
                break;
            default:
                break;
        }
    }
}

interactuarConUsuario();