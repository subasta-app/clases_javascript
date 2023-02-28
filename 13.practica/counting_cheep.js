function countSheeps(arrayOfSheep) {
    let cheepTotal = 0;
    for ( let i = 0; i < arrayOfSheep.length ; i++ ){
        if(arrayOfSheep[i]){
            cheepTotal++
        }
    }
    return cheepTotal;
}


let cheeps = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true, true ,false]


    console.log(countSheeps(cheeps))