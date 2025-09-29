
//Crea un array llamado notas con las siguientes calificaciones: [4, 8, 3, 10, 5].
const notas = [4, 8, 3, 10, 5];
//Escribe una función que tome el array de notas y lo ordene de menor a mayor. Utiliza el método sort.
/**
 * 
 * @param {notas} notas 
 * @returns {notas}
 */
function minorAMajor(notas){
    return notas.sort((a,b)=>a-b);
}
//Imprime el array de notas ordenado por la consola.
console.log(minorAMajor(notas));