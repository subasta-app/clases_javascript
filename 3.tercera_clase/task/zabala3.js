// realiizar una funcion por cada operacion aritmetica 

function sumarDosNumeros(valorUno,valorDos){
    return valorUno + valorDos;
};

console.log(sumarDosNumeros(3,2));


function restarDosNumeros(valorUno,valorDos){
    return valorUno - valorDos;
};

console.log(restarDosNumeros(10,7));


function multiplicarDosNumeros(valorUno,valorDos){
    return valorUno * valorDos;
};

console.log(multiplicarDosNumeros(7,8));

function dividirDosNumeros(valorUno,valorDos){
    return valorUno / valorDos;
};

console.log(dividirDosNumeros(50,5));

function potenciaDosNumeros(valorUno,valorDos){
    return valorUno ** valorDos;
};

console.log(potenciaDosNumeros(15,3));

function residuoDosNumeros(valorUno,valorDos){
    return valorUno % valorDos;
};

console.log(residuoDosNumeros(31,3));

//realizar un script que me diga si una palabra es palindroma

// function esPalindromo(cadena){

//     let array = cadena.split("");
//     let reverse = array.reverse();

//     return cadena == reverse.join("") ? "Si es un palindromo 😁👌" : "No es un palindromo 😢😶‍🌫️"

// }

//     console.log(esPalindromo("anitalavalatina"));



// const string = "anitalavalatina";

// const reversedWord = 
//       string.split("")
//       .reverse()
//       .join("")


// const isPalindrome = reversedWord === string
// console.log(isPalindrome);


function isPalindrome (words) {
    let newWord = words.replace(/\s+/g, '').toLowerCase(); //se reemplaza espacios y se convierte a minuscula
    let strReverse = newWord.split("").reverse().join(""); //serapa en un array con el split, revierte el array y con join lo vuelve a convertir en string
    
    return strReverse === newWord ?  `${ words } es palindromo` : 'No es palindromo';
}

//   `${ words } es palindromo` preguntar como se llama esto

let test1 = "ojo";

let response = isPalindrome(test1);

console.log(response);
