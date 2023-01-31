//let hpPersonajes = ("https://harry-potter-api.onrender.com/personajes")

const request = new XMLHttpRequest();
request.open('GET', 'https://harry-potter-api.onrender.com/personajes', true);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {

    const data = JSON.parse(this.response);
    
    const contenedor = document.getElementById('contenedor');
    contenedor.setAttribute('class', 'card-columns');
    
    const contenedor = document.getElementById('contenedor');
    const mensajeError = document.createElement('div');

    mensajeError.setAttribute('class', 'alert alert-danger');
    mensajeError.textContent = `Ha ocurrido un error con código ${request.status}`;

    contenedor.appendChild(mensajeError);
  }
}

request.send();