//Ejercicio 3: Propiedades de Nodos
//3.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div con id "lipsum" en tu página web de ejemplo. Almacena este nodo en una variable.

let firstParagraph = document.querySelector("#lipsum p");

console.log(firstParagraph);

//3.2. Utiliza la propiedad innerHTML para obtener el contenido HTML completo del párrafo obtenido en el ejercicio 3.1. Imprime el contenido en la consola.

let contentParagraph = firstParagraph.innerHTML;

console.log(contentParagraph);

//3.3. Emplea la propiedad textContent para obtener el contenido de texto del párrafo obtenido en el ejercicio 3.1. Imprime el contenido en la consola.

let text = firstParagraph.textContent;

console.log(text);

//3.4. Utiliza document.querySelector() para obtener el primer input de tipo "text" en tu página web de ejemplo. Almacena este nodo en una variable.

let firstInput = document.querySelector("input[type = 'text']");

console.log(firstInput);

//3.5. Usa la propiedad value para obtener el valor del input obtenido en el ejercicio

console.log(firstInput.value);

//3.6. Imprime el valor en la consola, al menos de 2 formas:
//El innerHTML de la etiqueta de ‘Escoge sexo’

//El has recorre dentro del label y busca en este caso lo que haya dentro del label con nombre sexo
let labelSexo = document.querySelector('label:has([name="sexo"])');
console.log("innerHTML:", labelSexo.innerHTML);

//El textContent de esa etiqueta

console.log("textContent:", labelSexo.textContent);

//El valor del primer input de sexo

let firstSexoInput = document.querySelector('input[name="sexo"]');
console.log("Primer input de sexo:", firstSexoInput.value);

//El valor del sexo que esté seleccionado (difícil, búscalo por Internet)

let selectedSexo = document.querySelector('input[name="sexo"]:checked');
if (selectedSexo) {
  console.log("Sexo seleccionado:", selectedSexo.value);
} else {
  console.log("Ningún sexo seleccionado");
}