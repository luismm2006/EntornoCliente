
const cuadrado = function (num){
    return num**2;
}
const aplica_fn = (numero, funct) => funct(numero);

console.log(aplica_fn(5, cuadrado));