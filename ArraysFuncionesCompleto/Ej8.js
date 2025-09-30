//Pida al usuario una lista de números separados por coma con prompt().

let input = prompt("Escribe una lista de números: ");
console.log("Original input:", input);
//Convierta la cadena en array con split.

let numberArray = input.split(",");
console.log("Array of strings:", numberArray);

//Convierta todos los elementos a Number.

numberArray = numberArray.map(Number).filter(num => !isNaN(num));
console.log("Array of numbers:", numberArray);

//Calcule y muestre:

//La suma y media con reduce.

let sum = numberArray.reduce((total, num) => total + num, 0);
let average = sum / numberArray.length;

//El máximo y mínimo con Math.max(...arr) y Math.min(...arr).

let max = Math.max(...numberArray);
console.log(max);
let min = Math.min(...numberArray);
console.log(min);

//Un nuevo array con solo los pares.

let evenNumbers = numberArray.filter(num => num % 2 === 0);


//Un nuevo array con todos multiplicados ×2.

let doubledNumbers = numberArray.map(num => num * 2);

//Si hay al menos un número mayor que 100 (some).

let hasNumberOver100 = numberArray.some(num => num > 100);

//Si todos son positivos (every).

let allPositive = numberArray.every(num => num > 0);

//Muestre todos los resultados con console.table().

console.table({
  "sum": sum,
  "average": average,
  "max": max,
  "min": min,
  "evenNumbers": evenNumbers,
  "doubledNumbers": doubledNumbers,
  "hasNumberOver100": hasNumberOver100,
  "allPositive": allPositive
});