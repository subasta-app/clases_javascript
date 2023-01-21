export default class Tax{
    constructor(subTotalValue){
        this.taxes = this.iva(subTotalValue) + this.reteica(subTotalValue) + this.tax_by_breathe(subTotalValue) + this.alimentosUltraprocesados(subTotalValue) + this.peaje(subTotalValue)
    }

    iva(subTotal){
        return subTotal * 0.19
    }

    reteica(subTotal){
        return subTotal * 0.10
    }

    tax_by_breathe(subTotal){
        return subTotal * 0.05
    }

    alimentosUltraprocesados(subTotal){
        return subTotal * 0.02
    }

    peaje(subTotal){
        return subTotal * 0.03
    }

}

