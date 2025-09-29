let palabras = ['hola','adios','bien','mal','javascript','JS','array','map']
//Convierte todas las palabras a mayúsculas con map.
let mayus = palabras.map(palabra => palabra.toLocaleUpperCase());
console.log(mayus);

//Filtra solo las que tengan más de 3 letras.

console.log(palabras.filter(palabra => palabra.length>3));

//Ordena por longitud ascendente.

console.log(palabras.sort((a,b)=> a.length-b.length));

//Usa join para unirlas en una cadena separada por guiones.

let cadena = palabras.join("-");
console.log(cadena)

//Usa split para volver a tenerlas en array.

console.log(cadena.split("-"));


//Con reduce, cuenta cuántas letras en total suman todas.

let total = palabras.reduce((acumulador, letra) => acumulador+letra.length, 0);
console.log(total);