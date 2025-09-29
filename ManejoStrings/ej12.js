function tieneLetra(cadena, letra){
    cadena = cadena.toLowerCase();
    letra = letra.toLowerCase();

    return cadena.indexOf(letra)!==-1;
}
console.log(tieneLetra("Patata", "a"));