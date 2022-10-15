let varD = 'B'
let varE = 'C'
let varF = 'A'
let varA = varD
let varB = varE
let varC = varF


console.log(varA, varB, varC)

/**
 * Ou também poderia ser feito assim:
 * let varA = 'A'
let varB = 'B'
let varC = 'C'

const varATemp = varA
varA = varB
varB = varC
varC = varATemp

console.log(varA, varB, varC)

E ainda tem outra forma de fazer isso [uau]:

let varA = 'A'
let varB = 'B'
let varC = 'C'

[varA, varB, varC] = [varB, varC, varA ]

console.log(varA, varB, varC)
 */