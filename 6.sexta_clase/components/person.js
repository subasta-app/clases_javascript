class Person{
    constructor(name,age,gender,email,phone){
        this.name = name,
        this.age = age,
        this.gender = gender,
        this.email = email,
        this.phone = phone
    }

    verifyGender(){
        if (this.gender == 'Male') {
            console.log('He is a Man')
        }else{
            console.log('She is a Woman')
        }
    }
    // crear funcion para colocar Capitalize al name, van a verificar que age sea un number 
}

    

export default Person;