// Esta es mi tarea #7 del proyecto 


import Tax from '../taxes/index.js'

class Bill{
    constructor(name,description,quantity,price,customerData){
        // Atributos
        this.customerData = customerData,
        this.id = this.#assignId(),
        this.name = name,
        this.description = description,
        this.quantity = quantity,
        this.price = price,
        this.subTotalPrice = this.#subTotalPrice(),
        this.taxes = this.calculateTaxes(),
        this.iva = new Tax().iva(this.subTotalPrice),
        this.reteica = new Tax().reteica(this.subTotalPrice),
        this.alimentosUltraprocesados = new Tax(this.subTotalPrice),
        this.totalPrice = this.subTotalPrice + this.taxes
    }
    calculateTaxes(){
       let taxs = new Tax(this.subTotalPrice,this.customerData).taxes
       return taxs
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



//TAXXX
export default class Tax{
    constructor(subTotalValue,personita){
        console.log(personita)
        this.taxes = this.selectTaxes(subTotalValue,personita)
        
    }

    //todos
    iva(subTotal){
        let tax = subTotal * 0.19
        console.log("Tax::iva total"+ subTotal + " iva " + tax)
        return tax
    }

    //empresa
    reteica(subTotal){
        let tax = subTotal * 0.10
        console.log("Tax::reteica total"+ subTotal + " reteica " + tax)
        return tax
    }

    //persona natural
    tax_by_breathe(subTotal){
        let tax = subTotal * 0.05
        console.log("Tax::breathe total"+ subTotal + " breathe " + tax)
        return tax
    }
    
    //empresa
    alimentosUltraprocesados(subTotal){
        let tax = subTotal * 0.02
        console.log("Tax::alimentosUltraprocesados total"+ subTotal + " alimentosUltraprocesados " + tax)
        return tax
    }

    //todos
    toll(subTotal){
        let tax = subTotal * 0.03
        console.log("Tax::toll total"+ subTotal + " toll " + tax)
        return tax
    }

    taxNaturalPerson(subTotalValue){
        return this.iva(subTotalValue) + this.tax_by_breathe(subTotalValue) + this.toll(subTotalValue) 
    }

    taxCompany(subTotalValue){
        return this.iva(subTotalValue) + this.reteica(subTotalValue) + this.alimentosUltraprocesados(subTotalValue) + this.toll(subTotalValue) 
    }

    selectTaxes(subTotalValue,legalIdType){
        console.log(legalIdType)
        if (legalIdType["legal_id_type"] == "nit"){
            return this.taxCompany(subTotalValue)
        }else {
            return this.taxNaturalPerson(subTotalValue)
        }
    }
}

