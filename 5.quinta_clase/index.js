//clase 
//atributos --> caracteristicas del objeto
//metodos --> acciones que podemos realizar


//clase perro

class Dog {
    constructor(name,color,breed){ //initializer
        this.name = name;
        this.color = color;
        this.breed = breed;
    }

    bark(){
        return `${this.name}: guau guau`;
    }

}


const salchicha = new Dog('Doki','Amarillo','salchicha');
console.log(salchicha.bark());


const beagle = new Dog('Paul','tres colores','beagle');
console.log(beagle.bark());


class TwoNumbersOperation {
    constructor(fristValue,secondValue){ //initializer
        this.fristValue = fristValue;
        this.secondValue = secondValue;
    }

    sum(){
        return this.secondValue + this.fristValue;
    }
    diff(){
        return this.secondValue - this.fristValue;
    }
    multiply(){
        return this.secondValue * this.fristValue;
    }
    split(){
        return this.secondValue / this.fristValue;
    }

}


const operacionesX = new TwoNumbersOperation(2,9);

console.log('firstValue: ',operacionesX.fristValue);
console.log('secondValue: ',operacionesX.secondValue);

console.log('sum: ',operacionesX.sum())
console.log('diff: ',operacionesX.diff())
console.log('multiply: ',operacionesX.multiply())
console.log('split: ',operacionesX.split())

//construir una clase de cualquier objeto,animal,cosa que tenga minimo 3 atributos y 2 metodos