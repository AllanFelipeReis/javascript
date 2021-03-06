// if statement
if (confirm('Are you John Smith?')) {
// Confirm mostra uma caixa de dialogo de sim ou nao

  console.log('Hello John Smith')
} else {
  console.log('Then what is your name?')
}

console.log('1' == 1) // output = True
console.log('1' === 1) // output = False
// === So e' verdade se forem a mesma coisa e do mesmo tipo

var foo = 1
var bar = 2

if (foo < bar) {
  console.log('foo is smaller than bar')
} else if (bar > foo) {
  console.log('bar is smaller than foo')
} else {
  console.log('Equals')
}

/*
  > maior menor
  < menor maior
*/

// operator NOT == !
const smaller = foo > bar

if (!smaller) {
  console.log('foo is smaller than bar')
}

// switch
var rank = 'Commander'

switch (rank) { // Recebo a resposta
  case 'Private':
  case 'Sergeant':
    console.log('You are not authorized.')
    break // Sai do switch
  case 'Commander':
    console.log('Hello commander! what can I do for you today?')
    break
  case 'Captain':
    console.log('Hello captain! I will do anything you wish.')
    break
  default: // Caso nao seja nenhuma das opcoes
    console.log('I dont know what your rank is.')
    break
}

// Short-circuit logic
const x = 10
const resp = !isNaN(x) && isFinite(x) ? 'Valido' : 'Invalido'
console.log(resp)

const result2 = isNaN(x) || isFinite(x) ? 'Valido' : 'Invalido'
console.log(result2)

const result3 = (x < 100) ? 'Menor que 100' : 'Maior que 100'
console.log(result3)
