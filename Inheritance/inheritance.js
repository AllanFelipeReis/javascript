// Classe sem usar a palavra reservada prototype
function Person (name, age) {
  this.name = name
  this.age = age

  this.describe = function describe () {
    return this.name + ', ' + this.age + ' years old.'
  }
}

// Classe criada
function Person2 (name, age) {
  this.name = name
  this.age = age
}

// Usando prototype para classe receber um metodo
Person2.prototype.describe = () => {
  return this.name + ', ' + this.age + ' years old.'
}

var myPerson = new Person('Allan', 20)
console.log(myPerson.describe())

var myPerson2 = new Person2('Allan', 20)
console.log(myPerson2.describe())

// --------------------------------------------------------
// Criando uma classe vazia
var Person3 = function () {}

// Adicionando o metodo de inicializar
Person3.prototype.initialize = function (name, age) {
  this.name = name
  this.age = age
}

// Funcao que descreve a classe
Person3.prototype.describe = function () {
  return this.name + ', ' + this.age + ' years old.'
}

var Student = function () {}

// Heranca
Student.prototype = new Person3()

Student.prototype.learn = function (subject) {
  return this.name + ' just learned ' + subject
}

var me = new Student()
me.initialize('Allan', 20)
console.log(me.learn('JavaScript'))
