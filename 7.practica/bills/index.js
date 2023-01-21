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