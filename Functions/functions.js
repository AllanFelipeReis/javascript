//Funcao nomeada
function greet(name){ //Recebe um argumento
  return 'Hello ' + name; //Retorna isso quando funcao chamada
}
console.log(greet('Allan'));

//Funcao anonima
var greet = function(name){
  return 'Hello ' + name;
};
console.log(greet('Allan'));
