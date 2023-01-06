//operadores logicos
// === == !=  || -> O && -> Y 

if( numero == 14 ){
    console.log(' si esta en lo correcto ');
}else if(numero === 2){
    console.log(' no el numero es 2');
}else if(numero == '3'){
    console.log(' no el numero es 3');
}else if(numero !== 2){
    console.log(' si ese numero no es 2');
}else{
    console.log(' no el numero no es 14');
};


if( numero == 2 && numero === 2){
    console.log('si ese numero es 2');
};



let fruits = ['banana','watermelon','apple','blueberry'];


//bucle FOR
//let i es para inicializar el recorrido del bucle
// los arreglos tienen posiciones y su primera posición es 0


for(let i = 0 ; i < 4 ; i++){
    console.log('esto es ' + fruits[i] + ' esta en la posición '+ i );
};

let fruit = 'pineaple';

if(fruits.indexOf(fruit) < 0){
    fruits.push(fruit);
};
console.log('antes de: '+fruits);

let fruiToUpdate = 'pineaple';
let fruitUpdated = 'pineapple';

if(fruits.indexOf(fruiToUpdate) > -1){
    fruits[fruits.indexOf(fruiToUpdate)] = fruitUpdated;
    console.log('despues de: '+ fruits);
};


// escriban un condicional que reciba dos variables una para indicar que voy hacer y otra para agregar borrar o actualizar segun el caso
//ejemplo
// crear, borrar, acualizar, buscar y confirmar , buscar todos
// if( accion=='create'  dato=='apple'    ){


// CRUD 
// C -> Create 
// R -> Read
// U -> Update
// D -> Delete