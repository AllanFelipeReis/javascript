let numeroAleatorio = Math.floor(Math.random() * 100) + 1

const tentativa = document.querySelector('.guesses') // Tentativa anteriores
const ultimoResultado = document.querySelector('.lastResult') // Mostra a mensagem de acerto ou erro
const menorOuMaior = document.querySelector('.lowOrHi') // Mostra se esta para baixo ou para cima

const tentativaSubmit = document.querySelector('.guessSubmit') // Button que faz a chamada da funcao
const tentativaCampo = document.querySelector('.guessField') // Campo para digitacao do user

let tentativaContador = 1 // Numero de tentativas do user
let reset // Futuro button para reinicio da aplicacao

function checkGuess () {
  const userGuess = Number(tentativaCampo.value) // Faz o parse da tentaiva do user

  if (tentativaContador === 1) {
    tentativa.textContent = 'Tentativas Anteriores: ' // Adiciona o texto para mostrar o numero de tentativas
  }

  tentativa.textContent += userGuess + ' ' // Concatena o numero chutado pelo usuario

  if (userGuess === numeroAleatorio) {
    // Caso o user acerte
    ultimoResultado.textContent = 'Congratulations! You got it right'
    ultimoResultado.style.backgroundColor = 'green'
    menorOuMaior.textContent = ''
    setGameOver()
  } else if (tentativaContador === 10) {
    ultimoResultado.textContent = 'Game Over'
    setGameOver()
  } else {
    ultimoResultado.textContent = 'Wrong'
    ultimoResultado.style.backgroundColor = 'red'

    if (userGuess < numeroAleatorio) {
      menorOuMaior.textContent = 'Last guess was too low!'
    } else if (userGuess > numeroAleatorio) {
      menorOuMaior.textContent = 'Last guess was too high!'
    }
  }

  tentativaContador++
  tentativaCampo.value = ''
  tentativaCampo.focus()
}

function setGameOver () {
  tentativaCampo.disabled = true
  tentativaSubmit.disabled = true
  reset = document.createElement('button') // Criando o button
  reset.textContent = 'Start new game'
  document.body.append(reset) // Adciona no body
  reset.addEventListener('click', resetGame) // Adiciona um evento no button usando callback
}

function resetGame () {
  tentativaContador = 1
  const resetParas = document.querySelectorAll('.resultParas p')
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = ''
  }

  reset.parentNode.removeChild(reset)

  tentativaCampo.disabled = false
  tentativaSubmit.disabled = false
  tentativaCampo.value = ''
  tentativaCampo.focus()
  numeroAleatorio = Math.floor(Math.random() * 100) + 1
}
tentativaSubmit.addEventListener('click', checkGuess)
