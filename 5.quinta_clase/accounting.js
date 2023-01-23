class Accounting {
    constructor(data){ //initializer
        this.data = data; // mi data debe ser un arreglo
    }

    total(){
        const sumData = this.data.reduce((partialSum, a) => partialSum + a, 0);
        return sumData 
    }

    average(){
        // reduce de arreglo
        // let partialSum;
        // this.data.forEach((a)=>{
        //     partialSum = partialSum + a
        // })
        // forEach
        // for(let i = 0; i < array.length ; i++){
        // }
        //console.log('sumData: ',sumData);
        //length -> me permite sabes la cantidad de dato que tiene un arreglo o un javascript object notation json

        // DRY Don't repect yourself

        //const sumData = this.data.reduce((partialSum, a) => partialSum + a, 0);
        return this.total()/this.data.length;
    }

    tax(){
        //const sumDataTax = this.data.reduce((partialSumTax, b) => partialSumTax + b, 0);
        return this.total() * 0.19;
    }

    subTotal(){
        //const sumData = this.data.reduce((partialSum, a) => partialSum + a, 0);
        return this.total() - this.tax()
    }

}

let septData = [1,1,1,4,5,7,8,9,2]

const septAccounting = new Accounting( septData );
console.log('Promedio: ',septAccounting.average());
console.log('Total: ',septAccounting.total());
console.log('Impuestos: ',septAccounting.tax());
console.log('SubTotal: ',septAccounting.subTotal());



