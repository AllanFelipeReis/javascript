var emptyObject = {}; //Objeto Vazio
var personObject = {
  firstName : "Allan",
  lastName : "Reis"
};
personObject.age = 20; //Melhor jeito
personObject["salary"] = 1400; //Funciona mas o outro jeito e' melhor

console.log(personObject);

for(var member in personObject){
  if(personObject.hasOwnProperty(member)){ //Metodo para verificar se o membro realmente pertence aquele grupo
    console.log('The member ' + member +' of p personObject is ' + personObject[member]);
  }
}
