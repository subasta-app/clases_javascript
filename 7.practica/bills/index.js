import Tax from '../taxes/index.js'
class Bill{
    constructor(name,description,quantity,price){
        // Atributos
        this.id = this.#assignId(),
        this.name = name,
        this.description = description,
        this.quantity = quantity,
        this.price = price,
        this.subTotalPrice = this.#subTotalPrice(),
        this.iva = new Tax().iva(this.subTotalPrice),
        this.reteica = new Tax().reteica(this.subTotalPrice),
        this.taxes = new Tax(this.subTotalPrice).taxes,
        this.alimentosUltraprocesados = new Tax(this.subTotalPrice),
        this.totalPrice = this.subTotalPrice - this.taxes
    }
    //metodos
    //POO
    //private
    #assignId(){
        const currentDate = new Date();
        const timestamp = currentDate.getTime();
        return `${Math.round(this.#getRandomArbitrary(1000,9999))}-${timestamp}`
    }

    #subTotalPrice(){
        return this.price * this.quantity
    }

    #getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}

export default Bill;



//BILLL
import Bill from './bills/index.js'
import BillSerializer from './bills/serializer.js'

let customerData = {
    "name":"Joselito",
    "address":"calle falsa 123",
    "phone":"3161232323",
    "legal_id_type":"nit",
    "legal_id":"98347678234"
    // ingrese tipo documento y numero de documento legal_id_type(cc,ce,pp,nit) legal_id
    // el programa debe reconocer si es empresa o persona natural y solo colocar los impuestos que corresponde a cada uno
}

let dataBills = [
    {"name":"Sandwich","description":"pan con jamon y queso","quantity":3,"price":2500},
    {"name":"Poker","description":"Bebida embriagante","quantity":6,"price":3000},
    {"name":"cigarrillo","description":"tabaco empacado","quantity":2,"price":900}
];

let billCompleted = [];

dataBills.forEach( bill => {
    let newBill = new Bill(bill.name,bill.description,bill.quantity,bill.price,customerData)
    billCompleted.push(newBill)
})

let serializerData = new BillSerializer(billCompleted,customerData)

console.log(serializerData.finalBill);