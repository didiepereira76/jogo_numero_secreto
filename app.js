// let titulo = document.querySelector('h1')
// titulo.innerHTML = 'Adivinhe o numero secreto'

// let paragrafo = document.querySelector('p')
// paragrafo.innerHTML = 'Escolha um número entre 1 a 10'

let numerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumero()
let tentativas = 1

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

function exibirMensagemInicial() {
    exibirTexto('h1', 'Adivinhe o numero secreto')
    exibirTexto('p', 'Escolha um número entre 1 a 10')
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value

    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTexto('p', mensagemTentativa)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
            exibirTexto('p', 'O número secreto é menor!')
        } else {
            exibirTexto('p', 'O número secreto é maior!')
        }
        tentativas++
        limparCampo()
    }
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeElementos = numerosSorteados.length

    if (quantidadeElementos == )

        if (numerosSorteados.includes(numeroEscolhido)) {
            return gerarNumero()
        } else {
            numerosSorteados.push(numeroEscolhido)
            return numeroEscolhido
        }

}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero()
    limparCampo()
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)

}