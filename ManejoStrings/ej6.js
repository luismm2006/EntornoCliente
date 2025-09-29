function devuelveMasLarga(cadena1, cadena2){
    return cadena1.length==cadena2.length
        ?"Ninguna es más larga"
        : cadena1.length>cadena2.length
        ?cadena1
        :cadena2;
}
console.log(devuelveMasLarga("Patata", "Patatas"));