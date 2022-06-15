//CRUD
let losDatos = ['Angie','Pedro','Mariano'];
// Create --> Crear
function crear(){
    let nombre = document.getElementById('nombre_nuevo').value
    losDatos.push(nombre);
    console.log('Hemos agregado este dato ' + nombre);
    console.log(losDatos)
}
// Read --> Leer(mostrar)
function mostrar(){
    console.log('Estos son los datos:')
    console.log(losDatos);
    alert(losDatos)
}
// Update --> Actualizar
function actualizar(){
    let nombre_viejo = document.getElementById('nombre_viejo').value
    let nombre_nuevo = document.getElementById('nombre_nuevo').value
    let indice = losDatos.indexOf(nombre_viejo)
    losDatos[indice] = nombre_nuevo
    console.log('Se a actualizado el dato')
}
// Delete --> Borrar
function borrar(){
    let nombre = document.getElementById('nombre_viejo').value
    let indice = losDatos.indexOf(nombre)
    losDatos.splice(indice,1)
    console.log('Se a borrado el dato')
}

//enrutador
function crud(opcion,dato={}){
    // 1.crear el dato --> POST --> create
    // 2. mostrar los datos --> GET --> select 
    // 3. actualizar los datos --> PATCH o PUT --> update
    // 4. borrar los datos --> DELETE -->d elete
    if( opcion == 1 ){
        crear(dato)
    }else if ( opcion == 2 ){
        mostrar()
    }else if ( opcion == 3 ){
        actualizar(dato)
    }else if ( opcion == 4 ){
        borrar(dato)
    }
    
}

// crud(1,{'nuevo_dato':'Camilo'})
// crud(1,{'nuevo_dato':'Cristian'})
// crud(1,{'nuevo_dato':'Oscar'})
// crud(2)
// crud(3,{'nuevo_dato':'Edwin','viejo_dato':'Oscar'})
// crud(2)
// crud(4,{'viejo_dato':'Camilo'})
// crud(2)



//Arraglos -> Listas

let arreglox = [1,2,3,3.4,'hola',true]
             // 0,1,2,3,  4,     5
//console.log(arreglox[1])

let arreglo_objetos = [
    {'nombre':'pepe'},
    {'nombre':'mariano'},
    {'nombre':'andres'},
    {'nombre':'pacho'}
]
//console.log(arreglo_objetos[3]['nombre'])
//Objetos de javascript , hash, diccionarios

// let objeto = {
//     "colores":["verde","rojo","amarillo"],
//     "forma":"redondo",
//     "altura":2,
//     "is_active":true
// }
// console.log(objeto['forma'])
// console.log(objeto['colores'])



