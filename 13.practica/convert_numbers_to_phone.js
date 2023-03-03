function createPhoneNumber(numbers){
    let first = numbers.slice(0,3).join('')
    let second = numbers.slice(3,6).join('')
    let third = numbers.slice(6).join('')
    return `(${first}) ${second}-${third}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


function createPhoneNumber(numbers){
    let primeraParte = []
    let segundaParte = []
    let terceraParte = []

    primeraParte.push(numbers[0], numbers[1], numbers[2]);
    segundaParte.push(numbers[3], numbers[4], numbers[5]);
    terceraParte.push(numbers[6], numbers[7], numbers[8], numbers[9]);


    console.log('"('+primeraParte.join("")+")"+" "+segundaParte.join("")+"-"+terceraParte.join("")+'"');

}


let numerosPepito = new Array()

let numerosPepito2 = []