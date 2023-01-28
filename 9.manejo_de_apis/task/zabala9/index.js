


async function callingHeroes(){
    let response = await fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=7f6007d7a2f32452ce74ab763eeb1e5e&hash=5e79913d964b15f1314bdc6f71a853ea')
        .then((response) => response.json())

    let container = document.getElementById("heroes") 
    let contentHTML = '';  

    heroes = response.data.results
    heroes.forEach(hero => {
        let urlHero = hero.urls[0].url;
        insertHTML = `
        <div class="container">
            <a href="${urlHero}" target="_blank">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail" >
            </a>
            <h3 class="title">${hero.name}</h3>
        </div>`;
        // <ul> <li> <button onclick="showDescription(${hero.id})">Description</button></li> </ul>
    contentHTML = contentHTML + insertHTML

})

container.innerHTML = contentHTML;

}


// async function showDescription(id){
//     let hero = await fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=7f6007d7a2f32452ce74ab763eeb1e5e&hash=5e79913d964b15f1314bdc6f71a853ea' + id)
//         .then((response) => response.json())
//     alert(
//         `Mi nombre es ${hero.name}  y  ${hero.description} `
//     )
// }
callingHeroes() 

