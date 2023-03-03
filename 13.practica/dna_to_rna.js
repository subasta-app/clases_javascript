function DNAtoRNA(dna) {
    let dnaArray = dna.split('')
    let rna = ''
    dnaArray.forEach((x,i) =>{
        x == 'T' ? dnaArray[i]='U' : dnaArray[i];
        rna = rna + dnaArray[i]
    })
    return rna
}


console.log(DNAtoRNA("TTTT"))