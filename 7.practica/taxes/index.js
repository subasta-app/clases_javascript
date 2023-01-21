export default class Tax{
    constructor(subTotalValue){
        this.taxes = this.iva(subTotalValue) + this.reteica(subTotalValue) + this.alimentosUltraprocesados(subTotalValue)
    }

    iva(subTotal){
        return subTotal * 0.19
    }

    reteica(subTotal){
        return subTotal * 0.10
    }

    alimentosUltraprocesados(subTotal){
        return subTotal * 0.20
    }

    peaje(subTotal){
        return subTotal * 0.30
    }

}

