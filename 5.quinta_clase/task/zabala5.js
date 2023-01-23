class Car {
    constructor(Brand,Model,Year,Color){ 
        this.Brand = Brand; 
        this.Model = Model; 
        this.Year = Year;  
        this.Color = Color; 
    }

    switch_on(){
        return `${this.Brand + " " + this.Model}: Encendido!💨`;
    }

    move(){
        return `${this.Brand + " " + this.Model}: Conduciendo! 🚗💨`;
    }

    switch_off(){
        return `${this.Brand + " " + this.Model}: Apagdo!❌`;
    }

}
    const Japanese = new Car('Nissan','GTR 34','2018','Grey');
    const American = new Car('Mustang','Shelby GT 500','2020','Black');
    const Germany = new Car('BMW','M3 GTS','2016','White');


    console.log(Japanese.switch_on());
    console.log(Japanese.move());
    console.log(Japanese.switch_off()); 

    console.log(American.switch_on());
    console.log(American.move());
    console.log(American.switch_off()); 

    console.log(Germany.switch_on());
    console.log(Germany.move());
    console.log(Germany.switch_off());