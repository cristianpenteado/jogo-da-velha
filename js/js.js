
let matriz = new Array(3)
let cont = 0
let jogador = 1

for (let i = 0; i < matriz.length; i++) {
    matriz[i] = new Array(3)
}

const realizarJogada = posicao => {
    let celula = document.getElementById(posicao)

    if (celula.childElementCount > 0) {

        alert("Selecione outra célula!")

    } else {

        if (jogador == 1) {
            let img = document.createElement('img')
            img.setAttribute('src', 'img/x.jpg')
            celula.appendChild(img)

        } else {
            let img = document.createElement('img')
            img.setAttribute('src', 'img/o.jpg')
            celula.appendChild(img)

        }
        cont++
        jogador = jogador == 1 ? 2 : 1

    }
}

const verificarCombinacoes = () => {

    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            matriz[i][j] = document.getElementById((i + 1) + '_' + (j + 1)).innerHTML
        }
    }

    if (((matriz[0][0] != '') && (matriz[0][1] != '') && (matriz[0][2] != '') && (matriz[0][0] == matriz[0][1]) && (matriz[0][1] == matriz[0][2])) ||
        ((matriz[0][0] != '') && (matriz[1][1] != '') && (matriz[2][2] != '') && (matriz[0][0] == matriz[1][1]) && (matriz[1][1] == matriz[2][2])) ||
        ((matriz[0][0] != '') && (matriz[1][0] != '') && (matriz[2][0] != '') && (matriz[0][0] == matriz[1][0]) && (matriz[1][0] == matriz[2][0])) ||
        ((matriz[1][0] != '') && (matriz[1][1] != '') && (matriz[1][2] != '') && (matriz[1][0] == matriz[1][1]) && (matriz[1][1] == matriz[1][2])) ||
        ((matriz[2][0] != '') && (matriz[2][1] != '') && (matriz[2][2] != '') && (matriz[2][0] == matriz[2][1]) && (matriz[2][1] == matriz[2][2])) ||
        ((matriz[0][1] != '') && (matriz[1][1] != '') && (matriz[2][1] != '') && (matriz[0][1] == matriz[1][1]) && (matriz[1][1] == matriz[2][1])) ||
        ((matriz[0][2] != '') && (matriz[1][2] != '') && (matriz[2][2] != '') && (matriz[0][2] == matriz[1][2]) && (matriz[1][2] == matriz[2][2])) ||
        ((matriz[2][0] != '') && (matriz[1][1] != '') && (matriz[0][2] != '') && (matriz[2][0] == matriz[1][1]) && (matriz[1][1] == matriz[0][2]))) {

        jogador = jogador == 1 ? 2 : 1

        setTimeout(function () {
            alert('Parabéns Jogador ' + " " + jogador + ' ! Você venceu!')
            realizarUmNovoJogo()
        }, 100)


    } else if (cont == 9) {
        setTimeout(function () {
            alert('Empate!')
            realizarUmNovoJogo()
        }, 100)

    }
}

const realizarUmNovoJogo = () => {
    for (i = 1; i < 4; i++) {
        for (j = 1; j < 4; j++) {
            let nomecelula = i + "_" + j
            document.getElementById(nomecelula).innerHTML = ''

        }
    }
    cont = 0;
}