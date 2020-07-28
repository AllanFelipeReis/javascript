// let variavel declarada a nivel de bloco
for (let i = 0; i < 10; i++) {
  // A variavel i so e' visivel dentro deste bloco
  console.log(i)
}

// Lanca execao pois a variavel i so e' visivel dentro do bloco
// console.log(i)

// Const variavel que nao pode ser alterada
const PI = 3.14
// PI = 1 Retorna uma execao pois a variavel pi e' imutavel
console.log(PI)

// Var e' o jeito mais comum e nao possui restricoes
for (var i = 0; i < 10; i++) {
  console.log(i)
}

// A variavel i e' visivel fora do bloco
console.log(i)
