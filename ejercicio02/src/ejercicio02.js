
let listaMascotas = [];

function agregarMascota() {

  let nombre = document.getElementById("nombre-mascota").value;
  let tipo = document.getElementById("opciones").value;
  let edad = document.getElementById("edad").value;
  let nombreDueno = document.getElementById("nombre-dueno").value;
  let vacunaSelect = document.querySelector('input[name="vacunado"]:checked');
  let vacuna = vacunaSelect ? vacunaSelect.value : "No seleccionado";
  const mascota = { id: Date.now(), nombre, tipo, edad, nombreDueno, vacuna };

  listaMascotas.push(mascota);


  mostrarMascotas();

  document.getElementById("formulario").reset();
}
function mostrarMascotas() {
  let tabla = document.querySelector("#tabla-mascotas tbody");
  tabla.innerHTML = ""; // limpiar antes de volver a pintar

  listaMascotas.forEach(mascota => {
    let fila = `
  <tr data-id="${mascota.id}">
    <td>${mascota.nombre}</td>
    <td>${"Raza: " + mascota.tipo}</td>
    <td>${"Edad: " + mascota.edad}</td>
    <td>${"Nombre del dueño: " + mascota.nombreDueno}</td>
    <td>${"Vacunado: " + mascota.vacuna}</td>
    <td><button data-action="borrar">Eliminar</button></td>
  </tr>
`;
    tabla.innerHTML += fila;
  });
}

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault(); // evita que la página se recargue
  agregarMascota();


});

document.querySelector("#tabla-mascotas tbody").addEventListener("click", function (e) {
  if (e.target.dataset.action === "borrar") {
    let fila = e.target.closest("tr"); // busca la fila
    let id = parseInt(fila.dataset.id); // obtiene el id
    borrarDatos(e)
    borrarMascota(id);
    
     mostrarMascotas(); // refresca la tabla
  }
});




function borrarDatos(e) {
    if (e.target.dataset.action === "borrar") {



        let button = e.target
        let mascotaId = button.closest('tr')
        let id = parseInt(mascotaId.dataset.id)
        borrarMascota(id);
    }

}
function borrarMascota(id) {
    listaMascotas = listaMascotas.filter(mascota => mascota.id !== id);

}

