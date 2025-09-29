function addGuiones(cadena){
    let cadenaNueva = "";
    for (let i = 0; i < cadena.length; i++) {
        if(i === cadena.length-1){
            cadenaNueva += cadena[i];
        }else{
            cadenaNueva += cadena[i] + "-";
        }
    }
    return cadenaNueva;
}
console.log(addGuiones("Patata"));