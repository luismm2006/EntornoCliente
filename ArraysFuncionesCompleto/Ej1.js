let productos = [
  { id: 1, nombre: 'Teclado', precio: 25.5, stock: 10 },
  { id: 2, nombre: 'Ratón', precio: 15.0, stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 150.0, stock: 5 },
  { id: 4, nombre: 'USB', precio: 8.0, stock: 25 }
]

//Con filter, obtén los productos con stock > 0.

let productsStock = productos.filter(productos=> productos.stock> 0);
console.log(productsStock);

//Con map, crea un array solo con los nombres de productos.

let productsName = productos.map(productos => productos.nombre);
console.log(productsName);

//Con reduce, calcula el valor total del stock (precio × stock).

let valueStock = productos.reduce((total, productos)=> total+= productos.precio*productos.stock , 0);
console.log(valueStock);

//Usa sort para ordenar por precio ascendente.

let productsSort = productos.sort((a,b) => a.precio-b.precio);
console.log(productsSort);

//Crea una función buscarProducto(nombre) que devuelva el objeto que coincide (o null si no existe).

function buscarProducto(nombre){
    let product = productos.find(prod => prod.nombre == nombre);
    return product == undefined ? null : product;
}
console.log(buscarProducto("Teclado"));
//Usa desestructuración para extraer nombre y precio del producto con id=3.

let producto = productos.find(p => p.id === 3);

let { nombre, precio } = producto;
console.log(nombre, precio);

//Convierte el array de productos en un Set de nombres y de nuevo en array para eliminar duplicados.

let setProductos = Array.from(new Set(productos.map(p=> p.nombre)));
console.log(setProductos);