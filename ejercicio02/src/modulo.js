export function cargarMatriz() {
    let matriz = []
    for (let i = 0; i < 3; i++) {
        let cadena = document.getElementById("fila" + i).value;
        matriz[i] = [];
        for (let j = 0; j < cadena.length; j++) {
            matriz[i][j] = cadena[j];
        }

    }
    return matriz

}

export function encontrarX(matriz) {
    let valorX = null

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] == "x") {
                console.log("encontre la x en la fila: " + i + " columna:" + j);
                if (i == 0) {
                    valorX = Number(matriz[2][j] || 0) - Number(matriz[1][j] || 0);
                } else if (i == 1) {
                    valorX = Number(matriz[2][j] || 0) - Number(matriz[0][j] || 0);
                } else if (i == 2) {
                    valorX = Number(matriz[0][j] || 0) + Number(matriz[1][j] || 0);
                    if (valorX > 9 && j > 0) {
                        valorX = Math.floor(valorX % 10);
                        if ((Number(matriz[0][j + 1]) + Number(matriz[1][j + 1]) > 9)) {
                            valorX += 1;
                        }
                    } else if ((matriz[0][j + 1] + matriz[1][j + 1]) > 9) {
                        valorX += 1;
                    }
                }
                matriz[i][j] = valorX;
            }
        }
    }
    return valorX
}