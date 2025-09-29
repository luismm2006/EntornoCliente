let alumnos = [
  {nombre:'Ana', nota:7.5, curso:'DAW'},
  {nombre:'Luis', nota:4.5, curso:'DAW'},
  {nombre:'María', nota:9.0, curso:'DAW'},
  {nombre:'Pedro', nota:6.0, curso:'DAM'},
  {nombre:'Lucía', nota:8.5, curso:'DAM'}
]
//Obtén con filter solo los del curso DAW.

console.log(alumnos.filter(alumno=> alumno.curso=="DAW"));

//Usa map para quedarte con los nombres de los aprobados (nota≥5).

let aprobados = alumnos.filter(alumno => alumno.nota >= 5).map(alumno => alumno.nombre);
console.log(aprobados);
//Con reduce, calcula la media de notas de DAM.

const damAlumnos = alumnos.filter(alumno => alumno.curso === "DAM");

const mediaDAM = damAlumnos.reduce((acumulado, alumno) => acumulado + alumno.nota, 0) / damAlumnos.length;

console.log(mediaDAM);
//Con find, busca al alumno llamado ‘María’.

console.log(alumnos.find(alumno => alumno.nombre == "María"));

//Con findIndex, obtén la posición del primer suspenso.

console.log(alumnos.findIndex(alumno => alumno.nota<5));

//Con sort, ordena los alumnos por nota descendente.

console.log(alumnos.sort((a,b)=> b.nota - a.nota));

//Crea una función que reciba un array de alumnos y devuelva un objeto con {aprobados:x, suspensos:y}.

function aprobadosSuspensos(alumnos) {
    let resultado = { aprobados: 0, suspensos: 0 };

    alumnos.forEach(alumno => {
        if (alumno.nota >= 5) {
            resultado.aprobados++;
        } else {
            resultado.suspensos++;
        }
    });

    return resultado;
}
console.log(aprobadosSuspensos(alumnos));