function century(year) {
    let century = year / 100;
    let truncCentury = Math.trunc(century);

    if (century - truncCentury > 0) {
        return truncCentury + 1
    } else {
        return truncCentury
    }
}

century(1705)


function century(year) {
    let centenio = []
    let resultado = []
    let final = []
    for(let i = 0; i<=year ;i++){

            centenio.push((i*100)+1);
            console.log(i);
            console.log(centenio);


    }

    for( let j = 0 ; j<centenio.length ; j++){
        if (year >= centenio[j] && year < centenio[j+1]){
            resultado.push(year)
            console.log(resultado);
             final.push(centenio[j])
         }
    }

    console.log(resultado + ' --> ' + Math. trunc((final/100)+1));

}

century(1705);