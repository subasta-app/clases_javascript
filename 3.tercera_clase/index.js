function sumarDosNumeros(valorUno,valorDos){
    return valorUno + valorDos;
};

console.log(sumarDosNumeros(3,2));

// realiizar una funcion por cada operacion aritmetica 


let upperCaseText = (text) =>{
    return text.toUpperCase();
};
console.log(upperCaseText('fulanito'));

let parkingHotel = ['Mercedez','Audi','BMW']

let parking = [];

console.log(parking);

let insertCar = (car)=>{
    parking.push(car);
};

let readCarsInParking = (parkingValue)=>{
    console.log(parkingValue);
};

let deleteCar = (car,parkingValue) => {
    parkingValue.splice(parkingValue.indexOf(car),1);
};

let updateCar = (oldCar,newCar,parkingValue)=>{
    parkingValue[parkingValue.indexOf(oldCar)] = newCar;
};
// let updateCar = (oldCar,newCar,parkingValue)=>{
//     deleteCar(oldCar,parkingValue);
//     insertCar(newCar)
// };

insertCar('Nissan');
readCarsInParking(parking);

insertCar('Subaru');
readCarsInParking(parking);

insertCar('Mazda');
readCarsInParking(parking);
readCarsInParking(parkingHotel);

deleteCar('Subaru',parking);
readCarsInParking(parking);
readCarsInParking(parkingHotel);


updateCar('Nissan','Volskwagen',parking);
readCarsInParking(parking);
readCarsInParking(parkingHotel);

//realizar un script que me diga si una palabra es palindroma
// anita lava la tina