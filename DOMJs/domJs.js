const pegaElementoPeloId = document.getElementById('getId') // Retorna um item
const pegaElementoPelaTag = document.getElementsByTagName('span') // Retorna um array
const pegaElementoPelaClassName = document.getElementsByClassName('className') // Retorna um array
const pegaElementoPelaTagClassName = document.querySelectorAll('p.className') // Retorna um array
const tituloDinamico = document.getElementById('TituloDinamico')
const imagem = document.getElementById('imagem')
const bodyDaPagina = document.getElementsByTagName('body')
const selectOpcoes = document.getElementById('opcoes')
const inputOnChange = document.getElementById('inputOnChange')
const onMouse = document.getElementById('passeMouseHere')

document.write('<br>Teste document.Write<br>') // Adiciona no html

imagem.src = 'imagem2.png' // Adiciona o src ao elemento
imagem.alt = 'Alt js teste'

pegaElementoPelaTag[0].style.color = 'green'
pegaElementoPelaTag[0].style.background = 'black' // Estilizando com css no js

tituloDinamico.onclick = mudaText // Atribuindo funcoes a eventos
bodyDaPagina[0].onload = paginaCarregada
selectOpcoes.onchange = mudaOpcao
inputOnChange.onchange = mudaOpcao
onMouse.onmouseover = mouseSobre
onMouse.onmouseout = tiradaMouse

function mudaText () {
  this.innerHTML = 'Thank You!'
}

function paginaCarregada () {
  alert('Pagina Carregada')
}

function mudaOpcao () {
  alert('Opcao alterada')
}

function mouseSobre () {
  this.innerHTML = 'Ok, Mouse sobre mim'
}

function tiradaMouse () {
  this.innerHTML = 'Passe o mouse aqui'
}

console.log(pegaElementoPelaTag)
console.log(pegaElementoPeloId)
console.log(pegaElementoPelaClassName)
console.log(pegaElementoPelaTagClassName)
console.log(imagem)
