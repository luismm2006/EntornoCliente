function contadorDeLetras(cadena, letra){
    let cantidad = 0;
    for (let i = 0; i < cadena.length; i++) {
        if(letra == cadena[i]){
            cantidad++;
        }
    }
    return cantidad;
}
console.log(contadorDeLetras("patata", "a"));