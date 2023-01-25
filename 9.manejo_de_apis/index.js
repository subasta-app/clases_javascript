async function llamandoARick() {
    let response = await fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
    let charactersHtml = document.getElementById("characters")

    let insertHtml = '';

    characters = response.results
    characters.forEach(character => {
        let newElementHtml = `<div class="container"><div class="name" ><p> ${character.name} <p></div><div class="image"> <img src="${character.image}" alt=""></div>
        <div><ul><li>${character.status}</li><li>${character.species}</li><li>${character.gender}</li></ul></div></div> `
        insertHtml = insertHtml + newElementHtml
    })

    charactersHtml.innerHTML = insertHtml
}
// Verbos HTTP -> protocolo de comunicacion en internet (hyper text transfer protocol)
// GET POST PATCH PUT DELETE diferencia en concepto a nivel de put y patch
// CRUD  Create Read Update Delete

llamandoARick()