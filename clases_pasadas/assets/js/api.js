async function getUsers() {
    let url = 'https://rickandmortyapi.com/api/character';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}

async function renderUsers() {
    let data = await getUsers();
    console.log(data.results)
    let users = data.results
    let html = '';
    users.forEach(user => {
        let htmlSegment =   `<div>
                                <img src="${user.image}">
                                <button onClick="getCharacter(${user.id})">Buscar</button>
                            </div>`;
        html += htmlSegment
    })
    let container = document.querySelector('.container');
    container.innerHTML = html;
}

async function getCharacter(value){
    let user = await getUser(value)
    console.log(user)
    let info = user
    let htmlSegment =   `<div>
                                <img src="${info.image}">
                                <h3>${info.name}<h3>
                                <span>${info.gender}<span>
                                <span>${info.species}<span>
                                <span>${info.status}<span>
                                <button onClick="modalClose()">cerrar</button>
                            </div>`;
    let personaje = document.querySelector('.personaje');
    personaje.innerHTML = htmlSegment;
    let modal = document.querySelector('.modal');
    modal.classList.add("mostrar");

}
function modalClose(){
    let modal = document.querySelector('.modal');
    modal.classList.remove("mostrar");
}

async function getUser(id) {
    let url = 'https://rickandmortyapi.com/api/character/'+id;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}

renderUsers();