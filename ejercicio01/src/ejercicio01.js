let matriz = []

for (let i = 0; i < 3; i++) {
    let cadena = prompt("ingrese los valores");

    matriz[i] = [];
    for (let j = 0; j < cadena.length; j++) {
        matriz[i][j] = cadena[j];

    }
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < matriz[i].length; j++) {

        if (matriz[i][j] == "x") {
            console.log("encontre la x en la fila: " + i + " columna:" + j);
            let resta = 0;
            if (i == 0) {

                resta = Number(matriz[2][j] || 0) - Number(matriz[1][j] || 0);

            } else if (i == 1) {
                resta = Number(matriz[2][j] || 0) - Number(matriz[0][j] || 0);

            }
            matriz[i][j] = resta;


        }

    }
}
console.log(matriz);
