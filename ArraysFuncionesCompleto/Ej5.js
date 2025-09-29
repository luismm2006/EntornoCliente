//Crea una función media(...valores) que calcule la media de cualquier número de argumentos.

function media(...valores){
    return valores.reduce((acumulado, valor)=> acumulado+valor , 0)/valores.length;
}
console.log(media(1,2,3,4,5,6));
//Usa spread para pasar un array de números a Math.min y Math.max.

let numeros = [3,4,5,6,4,2,13,2];
console.log(Math.min(...numeros));
console.log(Math.max(...numeros));

//Crea un objeto config con varias propiedades y usa spread para clonar y cambiar solo una propiedad.

let camion = {
    nombre: "Gloria",
    matricula: "2222HPC",
    color: "red"
}

let clonCamion = {...camion, color:"Blue"};

console.log(clonCamion);

//Usa desestructuración en parámetros para una función que reciba {nombre, nota} y muestre en consola un mensaje como "Alumno: nombre - Nota: nota".

let persona = {
    nombre: "Pepe",
    nota: 20
}
function mostrar({nombre, nota}){
    return "Alumno: " + nombre + "-" + "Nota: " + nota;
}
console.log(mostrar(persona))
