// function sameCase(a, b){
//     let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] 
//     let upperCase =[]
//       lowerCase.forEach(x=>{
//         upperCase.push(x.toUpperCase())
//       })
//     if(lowerCase.indexOf(a) > -1 && lowerCase.indexOf(b) > -1 || upperCase.indexOf(a) > -1 && upperCase.indexOf(b) > -1 ){
//         return 1 
//     }else if(lowerCase.indexOf(a) > -1 && upperCase.indexOf(b) > -1 || upperCase.indexOf(a) > -1 && lowerCase.indexOf(b) > -1 ){
//         return 0
//     }else{
//         return -1;
//     }
//     }

    //https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript




    function sameCase(a, b){
        if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
           return console.log(-1)
         }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
             return console.log(1)
         }else{
           return console.log(0)
         }
       }

    sameCase('1','?')