//Crea un array de objetos llamado alumnos donde cada objeto tiene las propiedades nombre y edad. Agrega al menos 5 objetos a este array.
const alumnos = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Carlos", edad: 19 },
  { nombre: "Beatriz", edad: 25 },
  { nombre: "David", edad: 20 },
  { nombre: "Elena", edad: 21 }
];
//Escribe una función que tome el array de alumnos y lo ordene por edad de menor a mayor utilizando el método sort.
function minorAMajorAge(alumnos){
    return alumnos.sort((a, b) => a.edad-b.edad);
}
//Imprime el array de alumnos ordenado por la consola.

console.log(minorAMajorAge(alumnos));