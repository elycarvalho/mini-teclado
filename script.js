const tecla01 = document.getElementById('tecla01')
const tecla02 = document.getElementById('tecla02')
const tecla03 = document.getElementById('tecla03')
const tecla04 = document.getElementById('tecla04')
const tecla05 = document.getElementById('tecla05')
const tecla06 = document.getElementById('tecla06')
const tecla07 = document.getElementById('tecla07')

const botaoPiano = document.getElementById('btn-piano')
const botaoBateria = document.getElementById('btn-bateria')
const botaoViolao = document.getElementById('btn-violao')
const botaoTrompete = document.getElementById('btn-trompete')

const btnGravar = document.getElementById('btn-gravar')
const btnTocar = document.getElementById('btn-play-gravacao')
const btnLimpar = document.getElementById('btn-limpa-gravacao')
const btnPausa = document.getElementById('btn-insere-pausa')

var imgInstrumento = document.getElementById('img-instrumento')

var gravacao = []
var indexGrava = 0

let intervaloPlay

var sonsPiano = [
	piano01 = document.getElementById('piano-1'),
	piano02 = document.getElementById('piano-2'),
	piano03 = document.getElementById('piano-3'),
	piano04 = document.getElementById('piano-4'),
	piano05 = document.getElementById('piano-5'),
	piano06 = document.getElementById('piano-6'),
	piano07 = document.getElementById('piano-7')
]

var sonsBateria = [
	drum01 = document.getElementById('drum-1'),
	drum02 = document.getElementById('drum-2'),
	drum03 = document.getElementById('drum-3'),
	drum04 = document.getElementById('drum-4'),
	drum05 = document.getElementById('drum-5'),
	drum06 = document.getElementById('drum-6'),
	drum07 = document.getElementById('drum-7')
]

var sonsViolao = [
	violao01 = document.getElementById('violao-1'),
	violao02 = document.getElementById('violao-2'),
	violao03 = document.getElementById('violao-3'),
	violao04 = document.getElementById('violao-4'),
	violao05 = document.getElementById('violao-5'),
	violao06 = document.getElementById('violao-6'),
	violao07 = document.getElementById('violao-7')
]

var sonsTrompete = [
	trompete01 = document.getElementById('trompete-1'),
	trompete02 = document.getElementById('trompete-2'),
	trompete03 = document.getElementById('trompete-3'),
	trompete04 = document.getElementById('trompete-4'),
	trompete05 = document.getElementById('trompete-5'),
	trompete06 = document.getElementById('trompete-6'),
	trompete07 = document.getElementById('trompete-7')
]

var sons = ['som1', 'som2', 'som3', 'som4', 'som5', 'som6', 'som7']
sons = sonsPiano

botaoPiano.addEventListener('click', () => {
  sons = sonsPiano
  botaoPiano.style.backgroundColor = '#FFA421'
  botaoBateria.style.backgroundColor = 'lightgray'
  botaoViolao.style.backgroundColor = 'lightgray'
  botaoTrompete.style.backgroundColor = 'lightgray'
  console.log(sons)
})

botaoBateria.addEventListener('click', () => {
  sons = sonsBateria
  console.log(sons)
  botaoPiano.style.backgroundColor = 'lightgray'
  botaoBateria.style.backgroundColor = '#FFA421'
  botaoViolao.style.backgroundColor = 'lightgray'
  botaoTrompete.style.backgroundColor = 'lightgray'
})

botaoViolao.addEventListener('click', () => {
  sons = sonsViolao
  console.log(sons)
  botaoPiano.style.backgroundColor = 'lightgray'
  botaoBateria.style.backgroundColor = 'lightgray'
  botaoViolao.style.backgroundColor = '#FFA421'
  botaoTrompete.style.backgroundColor = 'lightgray'
})

botaoTrompete.addEventListener('click', () => {
  sons = sonsTrompete
  console.log(sons)
  botaoPiano.style.backgroundColor = 'lightgray'
  botaoBateria.style.backgroundColor = 'lightgray'
  botaoViolao.style.backgroundColor = 'lightgray'
  botaoTrompete.style.backgroundColor = '#FFA421'
})

btnGravar.addEventListener('click', () => {
	indexGrava = 1
	btnGravar.style.backgroundColor = "red"
})

/*
btnTocar.addEventListener('click', () => {
	gravacao.forEach(tocaGravacao)
	
})

function tocaGravacao(item, index) {
	sons[item].play()
}
*/
var giro 

btnTocar.addEventListener('click', inicio)

function inicio() {
	console.log(gravacao.length)
	giro = 0
	indexGrava = 0
	intervaloPlay = setInterval(tocaGravacao, 200)
	tocaGravacao()
}

 

function tocaGravacao() {
    giro++
    gravacao[giro].play()
	console.log(gravacao.length)
	if(giro > gravacao.length) {
		console.log(gravacao)
		clearInterval(intervaloPlay)
	}
}

tecla01.addEventListener('click', () => {
	sons[0].play()
	sons[0].currentTime = 0
	if(indexGrava = 1) {gravacao.push(sons[0])}

})
tecla02.addEventListener('click', () => {
	sons[1].play()
	sons[1].currentTime = 0
	if(indexGrava = 1) {gravacao.push(sons[1])}
})
tecla03.addEventListener('click', () => {
	sons[2].play()
	sons[2].currentTime = 0
	if(indexGrava = 1) {gravacao.push(sons[2])}
})
tecla04.addEventListener('click', () => {
	sons[3].play()
	sons[3].currentTime = 0
	if(indexGrava = 1) {gravacao.push(sons[3])}
})
tecla05.addEventListener('click', () => {
	sons[4].play()
	sons[4].currentTime = 0
	if(indexGrava = 1) {gravacao.push(sons[4])}
})
tecla06.addEventListener('click', () => {
	sons[5].play()
	sons[5].currentTime = 0
	if(indexGrava = 1) {gravacao.push(sons[5])}
})
tecla07.addEventListener('click', () => {
	sons[6].play()
	sons[6].currentTime = 0
	if(indexGrava = 1) {gravacao.push(sons[6])}
})





document.addEventListener('keydown', recebeTecla) 

function recebeTecla() {
	var tecla = event.keyCode
	if(tecla == '65'){
		sons[0].play()
	    sons[0].currentTime = 0
	}
	if(tecla == '83'){
		sons[1].play()
	    sons[1].currentTime = 0
	}
	if(tecla == '68'){
		sons[2].play()
	    sons[2].currentTime = 0
	}
	if(tecla == '70'){
		sons[3].play()
	    sons[3].currentTime = 0
    }
	if(tecla == '71'){
		sons[4].play()
	    sons[4].currentTime = 0
	}
	if(tecla == '72'){
		sons[5].play()
	    sons[5].currentTime = 0
	}
	if(tecla == '74'){
		sons[6].play()
	    sons[6].currentTime = 0
	}
	console.log(tecla)
}


