// Todo numero e' float no js
console.log(3 / 2) // output = 1.5

console.log(0.1 + 0.2) // Erro de ponto flutuante

// Modulo Math con funcoes e constantes matematicas mais avancada
console.log(Math.PI)
console.log(Math.sin(3.5))

// ParseInt converte uma string em um valor numerico
console.log(parseInt('121', 10))
console.log(parseInt('121'))

// ParseFloat primo do parseInt
console.log(parseFloat('1.2'))

// Operador unário para converter valores em numeros
console.log(+'123')

// NaN == Nao e um numero
console.log(parseInt('Allan')) // output = NaN

// Funcao verifica se o retorno vai ser NaN
console.log(isNaN(parseInt('Allan')))

// Valor especial infinity
console.log(1 / 0)

// Valor especial -infinity
console.log(-1 / 0)

// isFinite
console.log(isFinite(1 / 0))
