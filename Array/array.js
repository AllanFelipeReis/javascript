var myArray = [1, 2, 3]; //Inicializando um array
var theSameArray = new Array(1, 2, 3); //Outra forma de inicializae o array

//Endereçamento
console.log(myArray[2]); //output = 3

var anotherArray = [];
anotherArray[3] = "Hello";
console.log(anotherArray); //output = [undefined, undefined, undefined, "Hello"]

//Array aceitam tipos diferentes
var myArray2 = ['Hello', 10, {}];
console.log(myArray2); //output =  ["Hello", 10, {}]
