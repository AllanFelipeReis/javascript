// Funcoes sao usadas como classe
// Criei uma classe
const Person = function (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName

  this.fullName = () => {
    // Metodo da classe.
    return this.firstName + ' ' + lastName
  }
}

// Instanciei esta classe
var myPerson = new Person('Allan', 'Reis') // new palavra reservada para a criacao de um novo objeto
console.log(myPerson.fullName())

// Cria o objeto e ja instancia
myPerson = {
  firstName: 'Allan',
  lastName: 'Reis',
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  }
}
console.log(myPerson.fullName())
