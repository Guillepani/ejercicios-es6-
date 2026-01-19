/*Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:
function findArrayIndex(array, text) {}

Ej array:
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];*/

// Función que devuelve el índice de un texto en un array
function findArrayIndex(array, text) {
  return array.findIndex(item => item === text);
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// Ejemplos
console.log(findArrayIndex(mainCharacters, "Luke"));    // 0
console.log(findArrayIndex(mainCharacters, "Rey"));       // 4
console.log(findArrayIndex(mainCharacters, "Obi-Wan"));   // 6
console.log(findArrayIndex(mainCharacters, "Yoda"));       // -1
