

// escriban un condicional que reciba dos variables una para indicar que voy hacer y otra para agregar borrar o actualizar segun el caso
//ejemplo
// crear, borrar, acualizar, buscar y confirmar , buscar todos
// if( accion=='create'  dato=='apple'    ){



let brands = ['Vans', 'Nike', 'Puma', 'Adidas'];

for(let i = 0; i < brands.length; i++) {
    // console.log('Element at index ${i} is ${brands[i]}'); preguntar esto.
    console.log('estas ' + brands[i] + ' estan en la posición '+ i );
};

// brands.push('Converse');  
// // usar .unshift cuando quieres que el elemento agregado vaya al inicio
// console.log(brands);

// // brands.shift();
// // console.log(brands);

// brands.splice(3,0, 'Reebok');
// // el primer numero indica la posicion donde ire el nuevo elemento y el segundo es hasta donde se eliminaran elementos.
// console.log(brands);

let brand = 'Converse';

if(brands.indexOf(brand)){
    brands.push(brand);
};
console.log(brands);


if(brands.indexOf(brands)){
    brands.splice(1,0, 'Reebok');
}
console.log(brands);


if(brands.indexOf(brands)){
    brands.pop(brands);
};
console.log(brands);



// CRUD 
// C -> Create 
// R -> Read
// U -> Update
// D -> Delete