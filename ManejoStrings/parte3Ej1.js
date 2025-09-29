function validarDNI(dni) {
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let esValido = false;

    dni = dni.toUpperCase().trim(); 

    let tieneOchoDigitos = /^\d{8}/.test(dni);

    if (tieneOchoDigitos) {
        let numero = parseInt(dni.slice(0, 8));
        let letra = dni.slice(-1);
        let letraCorrecta = letras[numero % 23];

        if (dni.length === 8) {
            esValido = true; 
        } else if (dni.length === 9 && letra === letraCorrecta) {
            esValido = true; 
        }
    }

    return esValido;
}
console.log(validarDNI("23879455G"));