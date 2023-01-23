s='IV'

let romanos = {
    I: 1,
    V:5,
    X:10
}

console.log(romanos.I)
console.log(romanos['I'])


sEnPartes = s.split('')

console.log(sEnPartes)
console.log(sEnPartes.length)
console.log(sEnPartes[0])
console.log(sEnPartes[1])

let total = 0;

for( let i = 0; i< sEnPartes.length; i++){
    total = total + romanos[sEnPartes[i]]
}

console.log(total)