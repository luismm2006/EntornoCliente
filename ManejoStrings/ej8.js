function generarNombre(cadena1,cadena2,cadena3){
    let nuevaPalabra = "";
    return cadena1.length<5 || cadena2.length<5 || cadena3.length<5 ? "Error": nuevaPalabra = cadena1.substring(0,2) + cadena2.substring(0,2) + cadena3.substring(0,2);
}

console.log(generarNombre("Luiss", "Pepes", "Manuel"));