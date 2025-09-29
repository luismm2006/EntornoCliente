function devuelveUltimaLetra(cadena){
    cadenaLimpia = cadena.trim();
    return cadenaLimpia[cadenaLimpia.length-1];
}

console.log(devuelveUltimaLetra("Patata"));