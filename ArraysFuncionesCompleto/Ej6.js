let ventas = [
  {producto:'Libro', unidades:3, precio:12.5},
  {producto:'Bolígrafo', unidades:10, precio:1.2},
  {producto:'Carpeta', unidades:2, precio:5.0}
]
//Crea un nuevo array con el total por línea (unidades * precio).

console.log(ventas.map(venta => venta.unidades*venta.precio));

//Usa reduce para calcular el total de ventas.

console.log(ventas.reduce((acumulado, venta)=> acumulado+(venta.unidades*venta.precio), 0));

//Usa filter para quedarte solo con productos de más de 2 unidades.

console.log(ventas.filter(venta => venta.unidades>2));

//Convierte el array de productos en una cadena con map + join.

console.log(ventas.map(venta => venta.producto).join(", "));

//Invierte el array con reverse y comprueba si afecta al original (referencia).

console.log(ventas.reverse());
console.log(ventas);

//Crea una copia del array usando slice antes de invertirlo.
console.log("-----");
const copiaArray = ventas.slice();

console.log(copiaArray.reverse());
console.log(ventas);