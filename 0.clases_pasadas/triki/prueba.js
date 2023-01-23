
let cross = [];
let circle = [];

let casilla_uno = document.getElementById('casilla_uno')
let casilla_dos = document.getElementById('casilla_dos')
let casilla_tres = document.getElementById('casilla_tres')
let casilla_cuatro = document.getElementById('casilla_cuatro')
let casilla_cinco = document.getElementById('casilla_cinco')
let casilla_seis = document.getElementById('casilla_seis')
let casilla_siete = document.getElementById('casilla_siete')
let casilla_ocho = document.getElementById('casilla_ocho')
let casilla_nueve = document.getElementById('casilla_nueve')


let numeros = {
    casilla_uno:1,
    casilla_dos:2,
    casilla_tres:3,

    casilla_cuatro:4,
    casilla_cinco:5,
    casilla_seis:6,

    casilla_siete:7,
    casilla_ocho:8,
    casilla_nueve:9
}

let resultados = [
    [1,2,3], 
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]


// function changeColor(id){
let changeColor = (id) => {
    let casilla = document.getElementById(id)
    console.log("entrada: "+ numeros[id])
    console.log(cross.indexOf(numeros[id]))
    console.log(circle.indexOf(numeros[id]))
    console.log(cross.indexOf(numeros[id]) > -1)
    console.log(circle.indexOf(numeros[id]) > -1)

    if ((cross.indexOf(numeros[id]) > -1) || (circle.indexOf(numeros[id]) > -1)) {
         alert('Oprime otro recuadro')
    }else{
        if( cross.length == circle.length ){
            cross.push(numeros[id])
            casilla.classList.add("cross")
    }else if(cross.length > circle.length){
            circle.push(numeros[id])
            casilla.classList.add("circle")
    }
    console.log("circulos= "+ circle.sort())
    console.log("equix= "+ cross.sort())
    }


    resultados.forEach( resultado =>{

        puntosCircle = 0
        circle.forEach( o =>{
            if(resultado.indexOf(o) > -1){
                puntosCircle++
            }
        })
        if (puntosCircle == 3){
            return resultWin('O')
        }


        puntosCross = 0
        cross.forEach( x =>{
            if(resultado.indexOf(x) > -1){
                puntosCross++
            }
        })
        if (puntosCross == 3){
            return resultWin('X')
        }

    })
}

let resultWin = (value)=>{
    alert(`Gano el jugador ${value} Excelente`)
            return location.reload();
}