function contadorDeLetras2(cadena1, cadena2, letra){
    let cantidad1 = 0;
    let cantidad2 = 0;
    for (let i = 0; i < cadena1.length; i++) {
        if(letra.toLowerCase() == cadena1[i]){
            cantidad1++;
        }
    }
    for (let i = 0; i < cadena2.length; i++) {
        if(letra.toLowerCase() == cadena2[i]){
            cantidad2++;
        }
    }
    return cantidad1>cantidad2?cadena1:cadena2;
}
console.log(contadorDeLetras2("patata", "patataa", "a"));