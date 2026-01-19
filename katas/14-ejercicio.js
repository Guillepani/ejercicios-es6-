/*Crea una función llamada rollDice() que reciba como parametro el numero de caras 
que queramos que tenga el dado que deberá simular el codigo dentro de la función. 
Como hemos dicho, que la función use el parametro para simular una tirada de dado 
y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te 
preocupes! Busca información sobre la función de javascript Math.random()*/

// Función para simular una tirada de dado
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Ejemplos
console.log(rollDice(6));   // dado de 6 caras
console.log(rollDice(20));  // dado de 20 caras
console.log(rollDice(100)); // dado de 100 caras
