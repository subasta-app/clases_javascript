export default class Tax{
    constructor(subTotalValue){
        this.taxes = this.iva(subTotalValue) + this.reteica(subTotalValue) + this.tax_by_breathe(subTotalValue) + this.alimentosUltraprocesados(subTotalValue) + this.peaje(subTotalValue)
    }

    //todos
    iva(subTotal){
        return subTotal * 0.19
    }

    //empresa
    reteica(subTotal){
        return subTotal * 0.10
    }

    //persona natural
    tax_by_breathe(subTotal){
        return subTotal * 0.05
    }

    
    //empresa
    alimentosUltraprocesados(subTotal){
        return subTotal * 0.02
    }

    //todos
    peaje(subTotal){
        return subTotal * 0.03
    }

}

