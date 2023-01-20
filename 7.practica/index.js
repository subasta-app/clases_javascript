import Bill from './bills/index.js'

let dataBills = [
    {"name":"Sandwich","description":"pan con jamon y queso","quantity":3,"price":2500},
    {"name":"Poker","description":"Bebida embriagante","quantity":6,"price":3000},
    {"name":"cigarrillo","description":"tabaco empacado","quantity":2,"price":900}
];

let totalPriceBill = 0;

dataBills.forEach( bill => {
    let newBill = new Bill(bill.name,bill.description,bill.quantity,bill.price)
    totalPriceBill = totalPriceBill + newBill.totalPrice
})

console.log('El total de sus compras es de: ' + totalPriceBill)