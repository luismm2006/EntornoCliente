function indexOfIgnoreCase(cadena1, cadena2){
    return cadena1.trim().toLowerCase().indexOf(cadena2.trim().toLowerCase());
}
console.log(indexOfIgnoreCase("bit", "it"));