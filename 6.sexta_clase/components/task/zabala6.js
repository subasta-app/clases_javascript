  // crear funcion para colocar Capitalize al name, van a verificar que age sea un number 



const string = "cristian";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

capitalize(string);

console.log(capitalize(string));


let age = "hola";

if(age == Number()){

  console.log("its number")


} else{
  console.log("Not a Number")
}



function isNum(val){
  return !isNaN(val)
}
console.log(isNum(12));    

