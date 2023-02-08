class Customer {
    constructor(customer) {
        this.dataCustomer = this.organizeData(customer)
    }

    organizeData(customer) {
        return {
            "name": customer.name,
            "phone": customer.phone,
            "address": customer.address,
            "legal_id_type": customer.legal_id_type,
            "legal_id": customer.legal_id
        }
    }
}

export default Customer