import Customer from '../customers/index.js'

class BillSerializer {
    constructor(arrayBills,customerData){
        this.data = arrayBills
        this.customerData = customerData
        this.finalBill = this.finishedBill()
    }

    organizeBills(){
        let result = [];
        this.data.forEach( bill => {
            let data = {
                "id":bill.id,
                "name":bill.name,
                "description":bill.description,
                "quantity":bill.quantity,
                "unitPrice":bill.price,
                "subTotal":bill.subTotalPrice,
                "totaltaxes":bill.taxes,
                "total":bill.totalPrice
            }
            
            result.push(data)
        })
        return result;
    }
    totalBillPrice(){
        let result = 0;
        this.data.forEach( bill => {
            result = result + bill.totalPrice
        })
        return result;
    }
    finishedBill(){

        let customerData = new Customer(this.customerData)        
        return {
            "customer":customerData.dataCustomer,
            "factura":this.organizeBills(),
            "precioTotal":this.totalBillPrice()
        }
    }

}

export default BillSerializer;