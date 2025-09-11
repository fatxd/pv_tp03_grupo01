
let listaMascotas = [];

function agregarMascota() {

    let nombre = document.getElementById("nombre-mascota").value;
    let tipo = document.getElementById("opciones").value;
    let edad = document.getElementById("edad").value;
    let nombreDueno = document.getElementById("nombre-dueno").value;
    let vacunaSelect = document.querySelector('input[name="vacunado"]:checked');
    let vacuna = vacunaSelect ? vacunaSelect.value : "No seleccionado";
    const mascota = { nombre, tipo, edad, nombreDueno, vacuna };

    listaMascotas.push(mascota);

    console.log(listaMascotas);
    mostrarMascotas();

    document.getElementById("formulario").reset();
}
function mostrarMascotas() {
    let tabla = document.querySelector("#tabla-mascotas tbody");
    tabla.innerHTML = ""; // limpiar antes de volver a pintar

    listaMascotas.forEach(mascota => {
        let fila = `
          <tr>
            <td>${mascota.nombre}</td>
            <td>${"Raza: "+mascota.tipo}</td>
            <td>${"Edad: "+mascota.edad}</td>
            <td>${"Nombre del dueño: "+mascota.nombreDueno}</td>
            <td>${"Vacunado: " +mascota.vacuna}</td>
          </tr>
        `;
        tabla.innerHTML += fila;
    });
}

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault(); // evita que la página se recargue
    agregarMascota();
});
