async function getUsers() {
    let response = await fetch('http://127.0.0.1:3000/users')
        .then((response) => response.json())
    let charactersHtml = document.getElementById("characters")

    let insertHtml = '';

    console.log(response)

    characters = response
    characters.forEach(character => {
        let newElementHtml = `<div class="container"><div class="name" ><p> ${character.name} <p></div><div class="name" ><p> ${character.email} <p></div></div> `
        insertHtml = insertHtml + newElementHtml
    })

    charactersHtml.innerHTML = insertHtml
}
// Verbos HTTP -> protocolo de comunicacion en internet (hyper text transfer protocol)
// GET POST PATCH PUT DELETE diferencia en concepto a nivel de put y patch
// CRUD  Create Read Update Delete





// Ejemplo implementando el metodo POST:
async function postData() {
    let url = 'http://127.0.0.1:3000/users'
    let id = document.getElementById('idValue').value
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let data = {
        data:{
            id: id,
            name: name,
            email:email
        }
    }
    console.log(data);
    // Opciones por defecto estan marcadas con un *
    
    try {
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
          return location.reload(); // parses JSON response into native JavaScript objects
    } catch (error) {
        alert(error)
        return location.reload();
    }
   
  }
  
  getUsers()