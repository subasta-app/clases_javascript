class Customer{
    constructor(customer){     
        this.dataCustomer = this.organizeData(customer)
    }

    organizeData(customer){
        return {
            "name":customer.name,
            "phone":customer.phone,
            "address":customer.address
        }
    }
}

export default Customer