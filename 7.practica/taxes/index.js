export default class Tax{
    constructor(subTotalValue){
        this.taxes = this.iva(subTotalValue) + this.reteica(subTotalValue)
    }

    iva(subTotal){
        return subTotal * 0.19
    }

    reteica(subTotal){
        return subTotal * 0.10
    }

}

