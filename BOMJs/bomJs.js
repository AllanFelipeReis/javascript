// Quando a janela for carregada
window.onload = () => {
  const trBodyTable = document.querySelectorAll('table tbody tr')

  for (let i = 0; i < trBodyTable.length; i += 2) {
    trBodyTable[i].style.backgroundColor = 'gray'
  }
}

const hrefPagina = window.location.href // Retorna o caminho da onde esta o documento
const mensagemLocalStorage = document.getElementById('nome')
const mensagemSessionStorage = document.getElementById('sobrenome')
const msgUserAgradecimento = document.getElementById('msgUserAgradecimento')
const paraTimeout = document.getElementById('paraTimeout')
const paraInterval = document.getElementById('paraInterval')

// Armazena permanentemento a chave e o valor no navegador do user ate que ele apague o cache
window.localStorage.setItem('nome', 'Allan')
mensagemLocalStorage.innerHTML = window.localStorage.getItem('nome')

// Armazena temporariamente a chave e o valor no navegador do user ate que ele feche o navegador
window.sessionStorage.setItem('sobrenome', 'Reis')
mensagemSessionStorage.innerHTML = window.sessionStorage.getItem('sobrenome')

// Cria um popup
// const janela = window.open('', '', 'width=500, height=400')
// janela.document.write('Isso e um popup')
// janela.opener.document.write('Janela Filha Manda Janela Principal')

console.log(hrefPagina)

// Mensagem de agradecimento apos cinco segundos
// var msgAgradecimento = setTimeout(() => {
//   msgUserAgradecimento.innerHTML = 'Obrigado por acessar a pagina'
// }, 5000)

var count = 1
// Fica contado no console
// var intervalCont = setInterval(() => {
//   console.log(count)
//   count++
// }, 1000)

const verificaFoco = () => {
  if (document.hasFocus()) {
    console.log(count)

    if (count === 10) {
      msgUserAgradecimento.innerHTML = 'Obrigado por acessar a pagina'
      clearInterval(msgAgradecimento)
    }
    count++
  }
}

const msgAgradecimento = setInterval(verificaFoco, 1000)
