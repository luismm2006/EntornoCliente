const array1 = ["Luis", "Pepe", "Juan"];
const array2 = ["David", "Guti", "Platano", "Cesar", "Platano"];

// Concatenar correctamente
let concatenado = array1.concat(array2);
console.log(concatenado);

// Invertir el array
concatenado = concatenado.reverse();
console.log(concatenado);

// Buscar la primera aparición de 'Platano'
console.log(concatenado.indexOf("Platano"));

// Buscar la última aparición de 'Platano'
console.log(concatenado.lastIndexOf("Platano"));
