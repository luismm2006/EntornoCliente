//Ejercicio 1: Acceso a Elementos del DOM
//1.1. Utiliza document.getElementById() para obtener el nodo con el id "main" de tu página web de ejemplo. Imprime el nodo en la consola.

let mainElement = document.getElementById("main");
console.log(mainElement);

//1.2. Usa document.getElementsByClassName() para obtener todos los elementos con la clase "error" en tu página web de ejemplo. Imprime la colección en la consola.

let errorElements = document.getElementsByClassName("error");
console.log(errorElements);

//1.3. Utiliza document.getElementsByTagName() para obtener todos los elementos <p> de tu página web de ejemplo. Imprime la colección en la consola.

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

//1.4. Emplea document.querySelector() para obtener el primer párrafo con la clase "error" en tu página. Imprime el nodo en la consola.

let firstErrorParagraphs = document.querySelector("p.error");
console.log(firstErrorParagraphs);

//1.5. Usa document.querySelectorAll() para obtener todos los párrafos con la clase "error" en tu página. Imprime la colección en la consola.

let allErrorParagraphs = document.querySelectorAll("p.error");
console.log(allErrorParagraphs);

//1.6. Obtén por consola, al menos de 2 formas diferentes:
//El elemento con id ‘input2’
let input2_1 = document.getElementById("input2");
console.log(input2_1);
let input2_2 = document.querySelector("#input");
console.log(input2_2);

//La colección de párrafos

let allParagraphs1 = document.querySelectorAll("p");
console.log(allParagraphs1);

let allParagraphs2 = document.getElementsByTagName("p");
console.log(allParagraphs2);

//Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’

let paragraphsDiv1 = document.getElementById("lipsum").getElementsByTagName("p");
console.log(paragraphsDiv1);

let paragraphsDiv2 = document.querySelector("#lipsum").querySelectorAll("p");


//El formulario (ojo, no la colección con el formulario sino sólo el formulario)

let form1 = document.getElementById("myForm");
console.log(form1);

let form2 = document.querySelector("#myForm");
console.log(form2);

//Todos los inputs

let inputs1 = document.getElementsByTagName("input");
console.log(inputs1);

let inputs2 = document.querySelectorAll("input");
console.log(inputs2);

//Sólo los inputs con nombre ‘sexo’

let inputsSex1 = document.getElementsByTagName("input");
inputsSex1 = Array.from(inputsSex1).filter(input => input.name === "sexo");
console.log(inputsSex1);

let inputsSex2 = document.querySelectorAll('input[name = "sexo"]');
console.log(inputsSex2);


//Los items de lista de la clase ‘important’ (sólo los LI)

let itemsList1 = document.getElementsByTagName("li");
itemsList1 = Array.from(itemsList1).filter(item => item.className === "important");
console.log(itemsList1);

let itemsList2 = document.querySelectorAll('li[className = "important"]');
console.log(itemsList2);