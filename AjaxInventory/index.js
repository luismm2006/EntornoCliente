let inventario = [];
//pa cargar la tabla
const url = "http://localhost:3000/items";
const request = new XMLHttpRequest();
request.open("GET", url);
request.addEventListener("load", function(){
    if(request.status === 200){
        inventario = JSON.parse(request.responseText);
        renderTable();
    }else{
        console.log("Error " + request.status + " (" + request.statusText + ") en la petición");
    }
})
request.send();

const tablaBody = document.getElementById('inventarioBody');
const annadir = document.getElementById("annadir");

function renderTable(){
  tablaBody.innerHTML="";
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
    
    if(item.precio > 50){
      fila.className = "mayor";
    }
    
    tablaBody.appendChild(fila);
  });
  
}


annadir.addEventListener("submit", (event)=>{
    event.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const cantidad = document.getElementById("cantidad").value.trim();
    const precio = document.getElementById("precio").value.trim();
    let notAdded = true;
    const nuevoItem = { nombre, cantidad, precio };
    
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
    const request = new XMLHttpRequest;
    request.open("DELETE", "http://localhost:3000/items/" + id);
    request.addEventListener("load", function(){
        if(request.status === 200 || request.status === 204){
            const index = inventario.findIndex(item => item.id === id);
            if (index !== -1) {
                inventario.splice(index, 1);
                renderTable();
            }
        }else {
        console.error("Error al eliminar el elemento:", request.status, request.statusText);
        }
    })
    request.send();
}

function updateItem({nombre, cantidad, precio}){
    const item = inventario.find(it => it.nombre === nombre);
    const request = new XMLHttpRequest();
    request.open("PATCH", "http://localhost:3000/items/" + item.id);
    request.setRequestHeader("Content-Type", "application/json");
    const datosActualizados = {
        cantidad: parseInt(item.cantidad) + parseInt(cantidad),
        precio: precio
    };
    request.addEventListener("load", function(){
        if(request.status === 200){
            const actualizado = JSON.parse(request.responseText);
            const index = inventario.findIndex(it => it.id === item.id)
            inventario[index] = actualizado;
            renderTable();
        }else{
            console.log("Error al actualizar el elemento:" + request.status + " (" + request.statusText + ") en la petición");
        }
    });
    request.send(JSON.stringify(datosActualizados));
}

function createItem(nuevoItem){
    const request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", function(){
        if(request.status === 201){
            inventario.push(JSON.parse(request.responseText));
            renderTable();
        }else{
            console.log("Error al crear el elemento:" + request.status + " (" + request.statusText + ") en la petición");
        }
    });
    request.send(JSON.stringify(nuevoItem));
}