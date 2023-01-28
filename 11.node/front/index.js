async function llamandoARick() {
    let response = await fetch('http://127.0.0.1:3000/cars')
        .then((response) => response.json())
    let charactersHtml = document.getElementById("characters")

    let insertHtml = '';

    characters = response.data
    characters.forEach(character => {
        let newElementHtml = `<div class="container"><div class="name" ><p> ${character.name} <p></div><div class="image"> <img src="${character.image}" alt=""></div></div> `
        insertHtml = insertHtml + newElementHtml
    })

    charactersHtml.innerHTML = insertHtml
}
// Verbos HTTP -> protocolo de comunicacion en internet (hyper text transfer protocol)
// GET POST PATCH PUT DELETE diferencia en concepto a nivel de put y patch
// CRUD  Create Read Update Delete
async function showDetails(id){
    let character = await fetch('https://rickandmortyapi.com/api/character/'+id)
        .then((response) => response.json())
    alert(
        `Mi nombre es ${character.name} soy del planeta ${character.origin.name} y vivo en ${character.location.name}`
    )
}

llamandoARick()