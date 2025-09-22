
let listaMascotas = [];
let contadorSi = 0;
let contadorNo = 0

function agregarMascota() {

  let nombre = document.getElementById("nombre-mascota").value;
  let tipo = document.getElementById("opciones").value;
  let edad = document.getElementById("edad").value;
  let nombreDueno = document.getElementById("nombre-dueno").value;
  let vacunaSelect = document.querySelector('input[name="vacunado"]:checked');
  let vacuna = vacunaSelect ? vacunaSelect.value : "no";
  const mascota = { id: Date.now(), nombre, tipo, edad, nombreDueno, vacuna };
  if (vacuna === "si") {
    contadorSi++;
  } else {
    contadorNo++;

  }

  listaMascotas.push(mascota);
  actualizarContadores();

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
            <td>${"Raza: " + mascota.tipo}</td>
            <td>${"Edad: " + mascota.edad}</td>
            <td>${"Dueño: " + mascota.nombreDueno}</td>
            <td>${"Vacunado: " + mascota.vacuna}</td>
              <td>
              <button onclick="eliminarMascota(${mascota.id})">Eliminar</button>
            </td>
          </tr>
        `;
    tabla.innerHTML += fila;
  });
}
function actualizarContadores() {
  document.getElementById("contador-si").textContent = contadorSi;
  document.getElementById("contador-no").textContent = contadorNo;
}

function eliminarMascota(id) {
  listaMascotas = listaMascotas.filter(mascota => mascota.id !== id);
  mostrarMascotas();
  if (mascotaEliminada) {
    if (mascotaEliminada.vacuna === "si") {
      contadorSi--;
    } else {
      contadorNo--;
    }
    actualizarContadores();

  }
}

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault(); // evita que la página se recargue
  agregarMascota();
});


