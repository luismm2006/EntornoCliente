document.getElementById('addProduct').addEventListener('submit', (event) => {
  event.preventDefault();
  const newPokemon={
      nombre: document.getElementById("name").value,
      tipo: document.getElementById("type").value,
  }    
  const peticion=new XMLHttpRequest();
  peticion.open('POST', 'http://localhost:3000/pokemons');
  peticion.setRequestHeader('Content-type', 'application/json');  // Siempre tiene que estar esta línea si se envían datos
  peticion.send(JSON.stringify(newPokemon));              // Hay que convertir el objeto a una cadena de texto JSON para enviarlo
  peticion.addEventListener('load', function() {
    console.log("Estado de la petición: " + peticion.readyState);
        if (peticion.status === 201 || peticion.status === 200) {
            console.log("Pokemon añadidos:");
            cargarPokemons();
        } else {
            console.log("Error " + peticion.status + " (" + peticion.statusText + ") en la petición");
        }
    
  })
})

const ul = document.getElementById("lista");
function cargarPokemons(){
    ul.innerHTML = "";
    let peticion = new XMLHttpRequest();
    console.log("Estado inicial de la petición: " + peticion.readyState);
    peticion.open('GET', 'http://localhost:3000/pokemons');
    console.log("Estado de la petición tras el 'open': " + peticion.readyState);
    peticion.send();
    console.log("Petición hecha");
    peticion.addEventListener('load', function() {
        console.log("Estado de la petición: " + peticion.readyState);
            if (peticion.status === 200) {
                console.log("Datos recibidos:");
                let pokemons = JSON.parse(peticion.responseText);  // Convertirmos los datos JSON a un objeto
                pokemons.forEach(pokemon => {
                    const liPokemon = document.createElement("li");
                    liPokemon.textContent = "Nombre: " + pokemon.nombre + " | Tipo/s: " + pokemon.tipo;
                    ul.appendChild(liPokemon);
                });
                console.log(usuarios);
            } else {
                console.log("Error " + peticion.status + " (" + peticion.statusText + ") en la petición");
            }
        
    })
    peticion.addEventListener('error', muestraError);
    peticion.addEventListener('abort', muestraError);
    peticion.addEventListener('timeout', muestraError);

    function muestraError() {
        if (this.status) {
            console.log("Error "+this.status+" ("+this.statusText+") en la petición");
        } else {
            console.log("Ocurrió un error o se abortó la conexión");
        }
    }
}
cargarPokemons();