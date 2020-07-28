// Quando a janela for carregada
window.onload = () => {
  const trBodyTable = document.querySelectorAll('table tbody tr')

  for (let i = 0; i < trBodyTable.length; i += 2) {
    trBodyTable[i].style.backgroundColor = 'gray'
  }
}

const hrefPagina = window.location.href
const mensagemLocalStorage = document.getElementById('nome')
const mensagemSessionStorage = document.getElementById('sobrenome')

// Armazena permanentemento a chave e o valor no navegador do user ate que ele apague o cache
window.localStorage.setItem('nome', 'Allan')
mensagemLocalStorage.innerHTML = window.localStorage.getItem('nome')

// Armazena temporariamente a chave e o valor no navegador do user ate que ele feche o navegador
window.sessionStorage.setItem('sobrenome', 'Reis')
mensagemSessionStorage.innerHTML = window.sessionStorage.getItem('sobrenome')

// Cria um popup
const janela = window.open('', '', 'width=500, height=400')
janela.document.write('Isso e um popup')
janela.opener.document.write('Janela Filha Manda Janela Principal')



console.log(hrefPagina)
