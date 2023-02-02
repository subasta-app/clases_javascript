export default class Tax{
    constructor(subTotalValue,){
        return this.iva(subTotalValue) + this.tax_by_breathe(subTotalValue) + this.toll(subTotalValue) + this.iva(subTotalValue) + this.reteica(subTotalValue) + this.alimentosUltraprocesados(subTotalValue) + this.toll(subTotalValue) 
    }

    //todos
    iva(subTotal){
        let tax = subTotal * 0.19
        // console.log("Tax::iva total "+ subTotal + " iva " + tax)
        return tax
    }

    //empresa
    reteica(subTotal){
        let tax = subTotal * 0.10
        // console.log(" Tax::reteica total "+ subTotal + " reteica " + tax)
        return tax
    }

    //persona natural
    tax_by_breathe(subTotal){
        let tax = subTotal * 0.05
        // console.log("Tax:: breathe total "+ subTotal + " breathe " + tax)
        return tax
    }
    
    //empresa
    alimentosUltraprocesados(subTotal){
        let tax = subTotal * 0.02
        // console.log("Tax:: alimentos Ultra procesados total "+ subTotal + " alimentosUltraprocesados " + tax)
        return tax
    }

    //todos
    toll(subTotal){
        let tax = subTotal * 0.03
        // console.log("Tax:: Toll total "+ subTotal + " toll " + tax)
        return tax
    }
}