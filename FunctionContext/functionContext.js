var person = {
  name: 'Allan'
}

function printName () {
  console.log(this.name)
}

// Vinculando um metodo a um objeto
var vinculoFuncaoObjeto = printName.bind(person)
vinculoFuncaoObjeto()

// Chamando a funcao com um contexto diferente
printName.call(person)

// bind como call
printName.bind(person)()

// call como bind
var vinculoFuncaoObjeto2 = function () {
  printName.call(person)
}
vinculoFuncaoObjeto2()
