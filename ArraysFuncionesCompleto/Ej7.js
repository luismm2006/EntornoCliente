// Crea una función guardarPuntuacion(nombre, puntos) que guarde en un array de objetos con {nombre, puntos}.
let client = [
    
];
/**
 * 
 * @param {string} name 
 * @param {number} points 
 * @returns {Array}
 */
function guardarPuntuacion(name, points){
    client.push({nombre: name, puntos: points});
    return client;
}
console.log(guardarPuntuacion("luis", 200));
console.log(guardarPuntuacion("pepe", 100));
console.log(guardarPuntuacion("mario", 500));
console.log(guardarPuntuacion("David", 300));
console.log(guardarPuntuacion("David", 400));

// Crea otra función obtenerRanking() que devuelva el array ordenado por puntos descendente.

function obtenerRanking(client){
    return client.sort((a,b) => b.puntos - a.puntos);
}
console.log(obtenerRanking(client));
// Muestra el top 3 usando slice y forEach.

let top3 = client.slice(0,3);

top3.forEach(client=>{
    console.log(client);
})

// Asegúrate de que no se repiten jugadores usando un Set de nombres antes de guardar.

let clientUnique = new Set(client.map(cli => cli.nombre));
console.log(clientUnique);