/*Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros*/

// Arrow function con valores por defecto
const sumar = (a = 10, b = 5) => {
  console.log(a + b);
};

// 1.1 Sin pasar parámetros
sumar();          // 15

// 1.2 Pasando un solo parámetro
sumar(20);        // 25

// 1.3 Pasando dos parámetros
sumar(20, 30);    // 50


