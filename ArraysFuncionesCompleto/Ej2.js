let notas = [5.2, 3.9, 6, 9.75, 7.5, 3, 6.5, 9.75]

//Crea una función flecha aprobados que devuelva solo las notas ≥5.

const aprobados = notas.filter(nota => nota >= 5);
console.log(aprobados);

//Usa reduce para calcular la nota media.

let avg = notas.reduce((acumulado, number)=> acumulado+number, 0)/notas.length;
console.log(avg);

//Usa Math.max(...notas) para obtener la nota más alta.

console.log( Math.max(...notas));

//Crea un Set con las notas para eliminar duplicados.

console.log(new Set(notas));

//Con map, devuelve un array con las notas en formato "Nota: X".

let notasArray = notas.map(nota => {
    console.log("Nota: " + nota);
})

//Con some, comprueba si hay algún suspenso (<5).

console.log(notas.some(nota=>nota<5));

//Con every, comprueba si todas son ≥3.

console.log(notas.every(nota=> nota>=3));