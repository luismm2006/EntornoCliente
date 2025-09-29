function devuelveMasLarga2(cadena1,cadena2,cadena3){
    let l1 = cadena1.length;
    let l2 = cadena2.length;
    let l3 = cadena3.length;

    return (l1 === l2 || l1 === l3 || l2 === l3)
        ? "Hay al menos dos cadenas iguales"
        : (l1 > l2 && l1 > l3)
            ? cadena1
            : (l2 > l1 && l2 > l3)
                ? cadena2
                : cadena3;
}

console.log(devuelveMasLarga2("perro", "gato", "ornitorrinco"));