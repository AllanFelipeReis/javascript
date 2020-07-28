// Loops
var i
// For (init, condicao de parada, incremento)
for (i = 0; i < 3; i++) {
  console.log(i)
}

// Interando no array
var myArray = ['A', 'L', 'L', 'A', 'N']
for (i = 0; i < myArray.length; i++) {
// Array.length retorna o tamanho do array
  console.log('i - ' + i + '\nLetra - ' + myArray[i])
}

// while
i = 10
while (i > 0) {
// Enquanto essa condicao for verdadeira
  console.log(i)
  i-- // Decremento de -1
}

// Break
i = 10
while (true) {
// Laco infinito
  console.log(i)
  i-- // Decremento

  if (i === 0) {
    break // Força a saida do loop
  }
}

// Continue
for (i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue // Forca o laco a continuar
  }
  console.log(i)
}

// Do While
do {
  var admin = confirm('Allan?')
} while (!admin)

var array = [0, 1, 2, 3, 4, 5]
var obj = {
  firstname: 'Allan',
  lastName: 'Reis'
}

for (const value of array) {
  console.log(value)
}

// for (const value of obj) {
//   console.log(value)
// }
// Retorna uma execao objeto nao e' interavel

for (const value in array) {
  console.log(value)
}
for (const value in obj) {
  console.log(value)
}
