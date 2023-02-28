function reverseWords(str) {
    let arrayStr = str.split(" ")
    let spaces = ' '
    if(arrayStr[1]==''){
        arrayStr = str.split("  ")
        spaces = '  '
    }

    for (let i = 0; i < arrayStr.length; i++) {
        let wordReverse = []
        for (let j = 0; j < arrayStr[i].length; j++) {
            wordReverse.unshift(arrayStr[i][j])
        }

        if (i == arrayStr.length - 1) {
            arrayStr[i] = wordReverse.reduce(function (valorAnterior, valorActual) {
                return valorAnterior + valorActual;
            });
        } else {
            arrayStr[i] = wordReverse.reduce(function (valorAnterior, valorActual) {
                return valorAnterior + valorActual;
            }) + spaces;
        }


    }

    let finalStr = arrayStr.reduce(function (valorAnterior, valorActual) {
        return valorAnterior + valorActual;
    });
    return console.log(finalStr)
}

reverseWords('The quick brown fox jumps over the lazy dog.')
reverseWords('apple')
reverseWords('a b c d')
reverseWords('double  spaced  words')