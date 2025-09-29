// @ts-check
/**
 * @typedef {Object} coche
 * @property {string} marca
 * @property {string} modelo
 * @property {number} año
 */
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
};

/**
 * 
 * @param {coche} coche 
 * @returns {string}
 */
function mostrarCoche(coche) {
    return `${coche.marca} ${coche.modelo} (${coche.año})`;
}