function informacionProducto(producto) {
  const descripcion = `Producto: ${producto.nombre}
 Precio: ${producto.precio}
 Categoría: ${producto.categoria}
 Descripción: ${producto.descripcion || 'No disponible'}
`;

  console.log(descripcion);
}

const productoEjemplo = {
  nombre: 'Auriculares Inalámbricos',
  precio: 59.99,
  categoria: 'Electrónica',
  descripcion: 'Auriculares con cancelación de ruido y batería de 20 horas.'
};

informacionProducto(productoEjemplo);
