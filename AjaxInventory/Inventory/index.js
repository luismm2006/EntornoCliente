// GET - Obtener todos los items
let inventario = [];
const url = "http://localhost:3000/items";

// Pa cargar la tabla
fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject("Error al obtener los datos");
    }
  })
  .then(data => {
    inventario = data;
    renderTable();
    console.log("Datos cargados con fetch:", data);
  })
  .catch(error => console.error(error));

const tablaBody = document.getElementById('inventarioBody');
const annadir = document.getElementById("annadir");

function renderTable(){
  tablaBody.innerHTML = "";
  inventario.forEach((item) => {
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
    celdaEliminar.appendChild(btnEliminar);
    fila.appendChild(celdaEliminar);
    
    btnEliminar.addEventListener("click", () => {
      deleteItem(item.id);
    });
    
    if (item.precio > 50) {
      fila.className = "mayor";
    }
    
    tablaBody.appendChild(fila);
  });
}

annadir.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const cantidad = document.getElementById("cantidad").value.trim();
  const precio = document.getElementById("precio").value.trim();
  let notAdded = true;
  const nuevoItem = { nombre, cantidad: parseInt(cantidad), precio: parseFloat(precio) };
  
  inventario.forEach(item => {
    if (nuevoItem.nombre === item.nombre) {
      updateItem(nuevoItem);
      notAdded = false;
    }
  });
  
  if (notAdded) {
    createItem(nuevoItem);
  }
  
  document.getElementById("nombre").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("precio").value = "";
});

function deleteItem(id){
  fetch(url + "/" + id, {
  method: "DELETE"
  })
  .then(response => {
    if (response.ok) {
      const index = inventario.findIndex(item => item.id === id);
      if (index !== -1) {
        inventario.splice(index, 1);
        renderTable();
      }
    } else {
      return Promise.reject(response);
    }
  })
  .catch(error => console.error("Error al eliminar el elemento:", error));
}

function updateItem({nombre, cantidad, precio}){
  const item = inventario.find(it => it.nombre === nombre);
  const datosActualizados = {
    cantidad: parseInt(item.cantidad) + parseInt(cantidad),
    precio: parseFloat(precio)
  };

  fetch(url + "/" + item.id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datosActualizados)
  })
  .then(response => {
    if (response.ok) {
      const actualizado = JSON.parse(request.responseText);
      const index = inventario.findIndex(it => it.id === item.id);
      inventario[index] = actualizado;
      renderTable();
    } else {
      return Promise.reject(response);
    }
  })
  .then(data => {
    console.log("Elemento con id=" + idAActualizar + " actualizado:", data);
  })
  .catch(error => console.error("Error al actualizar el elemento:", error));

}

function createItem(nuevoItem){
  // POST
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(nuevoItem)
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject("Error al crear el elemento");
    }
  })
  .then(data => {
    inventario.push(data);
    renderTable();
    console.log("Elemento creado con éxito:", data);
  })
  .catch(error => console.error("Error al crear el elemento:", error));
}



