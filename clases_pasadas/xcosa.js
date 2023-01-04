let personas = 


function crear(dato){
    personas.push(dato)
    console.log("usted creo a " + dato)
    read()
}

function read(){
    console.log("las personas son: " + personas)
}

function borrar(dato){
    datoABorrar = personas.indexOf(dato)
    delete personas[datoABorrar]
    console.log("las personas son: " + personas)
}

function update(old_data,new_data){
    datoACambiar = personas.indexOf(old_data)
    personas[datoACambiar] = new_data
    read()
}

crear('Camilo');

borrar('Felipe');
update('Camilo','Mariana');

let personass = [
    { 'nombre': 'camilo', 'edad': 30},
    { 'nombre': 'camilo', 'edad': 30},
    { 'nombre': 'camilo', 'edad': 30},
    { 'nombre': 'camilo', 'edad': 30},
    { 'nombre': 'camilo', 'edad': 30},
    { 'nombre': 'camilo', 'edad': 30},
    { 'nombre': 'camilo', 'edad': 30},
    { 'nombre': 'camilo', 'edad': 30},
    { 'nombre': 'camilo', 'edad': 30},
]
    
