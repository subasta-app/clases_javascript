async function getUsers() {
    let url = 'http://127.0.0.1:3000/mostrar';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}

//res --> response
//req --> request

async function renderUsers() {
    let data = await getUsers();
    let users = data
    let html = '';

    users.forEach(user => {
        let htmlSegment =   `<div>
                                <img class="imagen-standard" src="${user.image}">
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
