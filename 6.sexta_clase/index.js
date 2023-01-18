// import algoEnMain from './samples/main.js'
// import algoEnInfo from './samples/info.js'
// console.log(algoEnMain)
// console.log(algoEnInfo)

import Person from './components/person.js';

let camilo = new Person('camilo',30,'Male','juanespitia@outlook.com','3165352329')

console.log(camilo.name)
console.log(camilo.gender)

camilo.verifyGender();