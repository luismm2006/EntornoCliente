let notas = [5.2, 3.9, 6, 9.75, 7.5, 3, 6.5, 9.75]

//Crea una función flecha aprobados que devuelva solo las notas ≥5.

const aprobados = notas.filter(nota => nota >= 5);
console.log(aprobados);

//Usa reduce para calcular la nota media.

let avg = notas.reduce((acumulado, number)=> acumulado+number, 0)/notas.length;
console.log(avg);

//Usa Math.max(...notas) para obtener la nota más alta.

//Crea un Set con las notas para eliminar duplicados.

//Con map, devuelve un array con las notas en formato "Nota: X".

//Con some, comprueba si hay algún suspenso (<5).

//Con every, comprueba si todas son ≥3.