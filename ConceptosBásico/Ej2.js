//Crea un array llamado original con algunos elementos.
const original = ["Pepe", "Luis", "Iván"];
//Crea un nuevo array llamado copia que sea una copia de original utilizando el método slice.
let copia = original.slice();
//Modifica un elemento en copia y verifica si también se modifica en original.
copia.splice(1,1);
console.log(copia);
console.log(original);