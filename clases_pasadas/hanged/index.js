let autos = [
    'mazda',
    'subaru',
    'renault'
]

let animals = [
    'perro',
    'murcielago',
    'pato',
    'raton'
]

let retrys = 3;

let lifes = document.getElementById('lifes')
lifes.innerText= retrys
let positionSelect = -1;
let category;

let selectCategory = ()=>{
    let autosInput = document.getElementById('autos').checked
    let animalsInput = document.getElementById('animals').checked
    let container = document.getElementById('container__letters')
    
    if (autosInput == true){
        retrys = 3;
        container.innerHTML = ''
        positionSelect = getRandomInt(autos.length)
        category=autos
        printLetters(autos)
    }
    if (animalsInput == true){
        retrys = 3;
        container.innerHTML = ''
        positionSelect = getRandomInt(animals.length)
        category=animals
        printLetters(animals)
    }
}






let getRandomInt= (max) => {
    return Math.floor(Math.random() * max)
}


let printLetters = (value) => {
    let container = document.getElementById('container__letters')
    let letter = ''
    for( let i = 0 ; i < value[positionSelect].length ; i++  ){
        letter = letter + `<input  id="letter${i}" onchange="verifyLetter(id)" type="text" class="letter" />`
    }
    container.innerHTML += letter
}



let verifyLetter = (id)=>{
    let letter = document.getElementById(id)
    if(letter.value != category[positionSelect][id[6]]){
        letter.value =''
        retrys-=1
        lifes.innerText = retrys
        if(retrys == 0){
            alert('No lograste acerta intenta un juego nuevo')
            location.reload();
        }else{
            alert('Vuelve a intentarlo')
        }
        
    }
}


