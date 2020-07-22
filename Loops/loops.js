//Loops
var i;
// For (init, condicao de parada, incremento)
for(i = 0; i < 3; i++){
  console.log(i);
}

//Interando no array
var myArray = ['A', 'L', 'L', 'A', 'N'];
for (i = 0; i < myArray.length; i++){ //Arrau.length retorna o tamanho do array
  console.log('i - ' + i + '\nLetra - ' + myArray[i]);
}

//while
var i = 10;
while (i > 0){ //Enquanto essa condicao for verdadeira
  console.log(i);
  i--; // Decremento de -1
}

//Break
var i = 10;
while (true){ //Laco infinito
  console.log(i);
  i--; //Decremento

  if (i === 0){
    break; //Força a saida do loop
  }
}

//Continue
for(i = 0; i < 10; i++){
  if(i % 2 == 0){
    continue; //Forca o laco a continuar
  }
  console.log(i);
}
