//Ejercicio 2: Acceso a Nodos Relacionados
//2.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div con id "lipsum" en tu página web de ejemplo. Imprime el nodo en la consola.

let firstParagraphs = document.querySelector("#lipsum p");
console.log(firstParagraphs);

//2.2. Emplea el método nextElementSibling para obtener el siguiente hermano del párrafo obtenido en el ejercicio 2.1. Imprime el nodo en la consola.

let elementSibling = firstParagraphs.nextElementSibling;
console.log(elementSibling);

//2.3. Utiliza el método parentElement para obtener el elemento padre del párrafo obtenido en el ejercicio 2.2. Imprime el nodo en la consola.

let fatherElement = elementSibling.parentElement;
console.log(fatherElement);

//2.4. Obtén por consola, al menos de 2 formas diferentes:
//El primér párrafo que hay dentro del div ‘lipsum’

let lipsumParagraph_1 = document.querySelector("#lipsum p");
console.log(lipsumParagraph_1);

let lipsumParagraph_2 = document.getElementById("lipsum").firstElementChild;
console.log(lipsumParagraph_2);

//El segundo párrafo de ‘lipsum’

let secondParagraph_1 = document.getElementById("lipsum").firstElementChild.nextElementSibling;
console.log(secondParagraph_1);

let secondParagraph_2 = document.querySelector("#lipsum").firstElementChild.nextElementSibling;
console.log(secondParagraph_2);

//El último item de la lista

let lastItem1 = document.querySelector("ul li:last-child");
console.log(lastItem1);

//falla
let lastItem2 = document.getElementById("lipsum").getElementsByTagName("ul")[-1];
console.log(lastItem2);

//La label de ‘Escoge sexo’

let form = document.getElementById("myForm");
let labels = form.getElementsByTagName("label");
let sexoLabel = labels[3]; 
console.log(sexoLabel);