const opcoes = {
    1 : {nome: 'pedra', imagem:'image/pedra.png', pedra: 'EMPATE', papel: 'PERDEU', tesoura: 'GANHOU'},
    2 : {nome: 'papel', imagem:'image/papel.png', pedra: 'GANHOU', papel: 'EMPATE', tesoura: 'PERDEU'},
    3 : {nome: 'tesoura', imagem:'image/tesoura.png', pedra:'PERDEU', papel:'GANHOU', tesoura: 'EMPATE'}

}

let escolhaComputador ={}
let escolhaJogador = {}

function escolherJogada(num){
    escolhaJogador = opcoes[num]
    console.log(escolhaJogador)
}

let numComp = Math.floor((Math.random()*3)+1)

escolhaComputador = opcoes[numComp]



