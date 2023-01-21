export default class Tax{
    constructor(subTotalValue){
        this.taxes = this.iva(subTotalValue) + this.reteica(subTotalValue) + this.tax_by_breathe(subTotalValue) + this.alimentosUltraprocesados(subTotalValue) + this.peaje(subTotal)
    }

    iva(subTotal){
        return subTotal * 0.19
    }

    reteica(subTotal){
        return subTotal * 0.10
    }

    tax_by_breathe(subTotal){
        return subTotal * 0.5
    }

    alimentosUltraprocesados(subTotal){
        return subTotal * 0.20
    }

    peaje(subTotal){
        return subTotal * 0.30
    }

}

