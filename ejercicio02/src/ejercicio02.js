let mascotas = []
let mascota = {}
let contVacuna = 0
let contNoVacuna = 0
let contMacotas = 0
let click = parseInt(prompt("ingrese 1 si desea ingresar una mascota 0 para cancelar"))
console.log(click)
for (let index = 0; index < 5; index++) {


    for (let index = 0; index < 1; index++) {

        mascota.nombre = prompt("Ingrese el nombre mascota")
        mascota.tipo = prompt("Tipo")
        mascota.edad = prompt("Dueño")
        mascota.vacuna = prompt("Vacuna")


        if (mascota.vacuna == "si") {
            contVacuna += 1
        } else {
            contNoVacuna += 1
        }
        contMacotas += 1
        click = 0   
        console.log(mascota)

    }
    
    mascotas[index] = mascota
    
}
console.log(mascotas)
console.log(contMacotas)
console.log(contNoVacuna)
