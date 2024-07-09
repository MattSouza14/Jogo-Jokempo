const opcoes = {
    1 : {nome: 'pedra', imagem:'image/pedra.png', pedra: 'EMPATE', papel: 'PERDEU', tesoura: 'GANHOU'},
    2 : {nome: 'papel', imagem:'image/papel.png', pedra: 'GANHOU', papel: 'EMPATE', tesoura: 'PERDEU'},
    3 : {nome: 'tesoura', imagem:'image/tesoura.png', pedra:'PERDEU', papel:'GANHOU', tesoura: 'EMPATE'}

}

let imgJogador = document.getElementById('imgUser')
let pJogador = document.getElementById('escolhaUsuario')

let imgComputador = document.getElementById('imgComput')
let pCoputador = document.getElementById('escolhaComputador')

let resultadoFinal = document.getElementById('resultado')

let contagemJogador = document.getElementById('pontosUsuario')
let contagemComputador = document.getElementById('pontosComputador')


let escolhaComputador ={}
let escolhaJogador = {}

let pontosJogador = 0
let pontosComputador = 0


function escolherJogada(num){
   return opcoes[num]
   
}
function montarJogada(numJogador){
    let numComp = Math.floor((Math.random()*3)+1)
    escolhaJogador = escolherJogada(numJogador)
    escolhaComputador = escolherJogada(numComp)

}
function avaliarGanhador(){
    if(escolhaJogador[escolhaComputador.nome] == 'GANHOU'){
        pontosJogador += 1
    }
    else if(escolhaJogador[escolhaComputador.nome] == 'PERDEU'){
        pontosComputador +=1
    }
}

function montarTela(){
    imgJogador.src = escolhaJogador.imagem
    imgComputador.src = escolhaComputador.imagem

    imgJogador.alt = escolhaJogador.nome
    imgComputador.alt = escolhaComputador.nome

    pJogador.innerHTML = `Você  ${escolhaJogador.nome}`
    pCoputador.innerHTML = `computador  ${escolhaComputador.nome}`


    contagemComputador.innerHTML = pontosComputador
    contagemJogador.innerHTML = pontosJogador

    resultadoFinal.innerHTML = escolhaJogador[escolhaComputador.nome]

    switch(escolhaJogador[escolhaComputador.nome]){

        case 'GANHOU':
            resultadoFinal.classList = 'ganhou'
            break;
        case 'PERDEU':
           resultadoFinal.classList = 'perdeu'
            break;
        default:
           resultadoFinal.classList = 'empatou'

            break;
    }
}


function jogar(num){
    montarJogada(num)
    avaliarGanhador()
    montarTela()

}
// escolhaComputador = opcoes[numComp]

// jogar(3)

// resultadoFinal.addEventListener('click', ()=>alert('teste'))

let btnPedra = document.getElementById('btnPedra')
let btnPapel = document.getElementById('btnPapel')
let btnTesoura = document.getElementById('btnTesoura')

btnPedra.addEventListener('click',()=>jogar(1))
btnPapel.addEventListener('click',()=>jogar(2))
btnTesoura.addEventListener('click',()=>jogar(3))


