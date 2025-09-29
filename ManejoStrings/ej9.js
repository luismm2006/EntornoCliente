function generarNombre2(cadena1,cadena2,cadena3){
    let nuevaPalabra = "";
    return cadena1.length<5 || cadena2.length<5 || cadena3.length<5 ? "Error": nuevaPalabra = cadena1[cadena1.length-1] + cadena2[cadena2.length-1] + cadena3[cadena3.length-1];
}
console.log(generarNombre2("Luiss", "Pepes", "Manuel"));