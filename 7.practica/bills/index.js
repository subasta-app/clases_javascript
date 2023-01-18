class Bill{
    constructor(name,description,quantity,price){
        // Atributos
        this.id = this.assignId(),
        this.name = name,
        this.description = description,
        this.quantity = quantity,
        this.price = price
    }
    //metodos
    assignId(){
        const currentDate = new Date();
        const timestamp = currentDate.getTime();
        return `${Math.round(this.#getRandomArbitrary(1000,9999))}-${timestamp}`
    }

    //POO
    //private
    #getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}
