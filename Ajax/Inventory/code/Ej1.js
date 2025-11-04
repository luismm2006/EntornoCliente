document.getElementById('addItem').addEventListener('submit', (event) => {
  event.preventDefault();
  const newItem={
      nombre: inpNombre.value,
      cantidad: inpCantidad.value,
      precio: inpPrecio.value
  }    
  const peticion=new XMLHttpRequest();
  peticion.open('POST', 'http://localhost:3000/');
  peticion.setRequestHeader('Content-type', 'application/json');  // Siempre tiene que estar esta línea si se envían datos
  peticion.send(JSON.stringify(newItem));              // Hay que convertir el objeto a una cadena de texto JSON para enviarlo
  peticion.addEventListener('load', function() {
    console.log("Estado de la petición: " + peticion.readyState);
        if (peticion.status === 201 || peticion.status === 200) {
            console.log("Item añadidos:");
            renderTable();
        } else {
            console.log("Error " + peticion.status + " (" + peticion.statusText + ") en la petición");
        }
    
  })
})
let inventario = { items: [] };
const tablaBody = document.getElementById('inventarioBody');
const annadir = document.getElementById("annadir");
const inpNombre = document.getElementById("nombre");
const inpCantidad = document.getElementById("cantidad");
const inpPrecio = document.getElementById("precio");

renderTable();

// Eliminar un ítem del inventario
function eliminarItem(id) {
  const peticion = new XMLHttpRequest();
  peticion.open('DELETE', `http://localhost:3000/0/${id}`);
  peticion.send();
  peticion.addEventListener('load', function() {
    if (peticion.status === 200) renderTable();
  });
}


// Renderizar tabla
function renderTable() {
  tablaBody.innerHTML = "";
  let peticion = new XMLHttpRequest();
    peticion.open('GET', 'http://localhost:3000/0');
    peticion.send();
    peticion.addEventListener('load', function() {
            if (peticion.status === 200) {
                   
                   inventario = JSON.parse(peticion.responseText);  // Convertirmos los datos JSON a un objeto
                   inventario.items.forEach((item, index) => {
                   const fila = document.createElement('tr');
               
                   const celdaNombre = document.createElement('td');
                   celdaNombre.textContent = item.nombre;
                   fila.appendChild(celdaNombre);
               
                   const celdaCantidad = document.createElement('td');
                   celdaCantidad.textContent = item.cantidad;
                   fila.appendChild(celdaCantidad);
               
                   const celdaPrecio = document.createElement('td');
                   celdaPrecio.textContent = item.precio;
                   fila.appendChild(celdaPrecio);
               
                   const celdaEliminar = document.createElement('td');
                   const btnEliminar = document.createElement('button');
                   btnEliminar.textContent = "Eliminar";
                   btnEliminar.className = "btn-eliminar";
                   celdaEliminar.appendChild(btnEliminar);
                   fila.appendChild(celdaEliminar);
               
                   // Acción eliminar
                   btnEliminar.addEventListener("click", () => eliminarItem(index));
               
                   // Destacar precios altos
                   if (item.precio > 50) {
                     fila.classList.add("mayor");
                   }
               
                   tablaBody.appendChild(fila);
                 });
            } else {
                console.log("Error " + peticion.status + " (" + peticion.statusText + ") en la petición");
            }
        
    })
}

// Actualizar cantidad si ya existe el producto
function update({ nombre, cantidad, precio }) {
  const indexItem = inventario.items.findIndex(item => item.nombre.toLowerCase() === nombre.toLowerCase());
  if (indexItem !== -1) {
    const item = inventario.items[indexItem];
    item.cantidad = parseInt(item.cantidad) + parseInt(cantidad);
    item.precio = parseFloat(precio);
    renderTable();
  }
}

// Añadir artículo nuevo o actualizar existente
function annadirArticulos() {
  const nombre = inpNombre.value.trim();
  const cantidad = inpCantidad.value.trim();
  const precio = inpPrecio.value.trim();

  if (!nombre || !cantidad || !precio) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  let notAdded = true;
  const nuevoItem = {
    nombre,
    cantidad: parseInt(cantidad),
    precio: parseFloat(precio)
  };

  inventario.items.forEach(item => {
    if (nuevoItem.nombre.toLowerCase() === item.nombre.toLowerCase()) {
      update(nuevoItem);
      notAdded = false;
    }
  });

  if (notAdded) {
    inventario.items.push(nuevoItem);
    renderTable();
  }

  // Limpiar campos
  inpNombre.value = "";
  inpCantidad.value = "";
  inpPrecio.value = "";
}

annadir.addEventListener("click", annadirArticulos);
