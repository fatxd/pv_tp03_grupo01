
let listaMascotas = [];
let nombre = document.getElementById("fila0");
let tipo = document.getElementById("fila1");
let edad = document.getElementById("fila2");
let nombreDueno = document.getElementById("fila3");
let vacunaSelect = document.querySelector('input[name="vacu"]:checked');
let vacuna = vacunaSelect ? vacunaSelect.value : "No seleccionado";

function agregarMascota(nombre, tipo, edad, nombreDueno, vacuna) {
    const mascota = { nombre, tipo, edad, nombreDueno, vacuna };
    listaMascotas.push(mascota);
    console.log(listaMascotas);
}

document.getElementById("formulario").addEventListener("submit", agregarMascota)
