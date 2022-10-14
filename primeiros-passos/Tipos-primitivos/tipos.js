const nome = 'ithalo' 
const nome1 = "ithalo" //Strings ↑↓
const nome2 = `Ithalo`
const n1 = 10 //Number
const n2 = 18.5 //Number
let nomeAluno //undefined → não aponta para nenhum lugar na memória lembre-se que constantes têm que receber um valor obrigatóriamente, consts nunca poderiam ser undefined, mas podem ser null ↓
const sobrenomeAluno = null //→ não aponta para nenhum lugar na memória é a mesma coisa de undefined mas quando você quer explicitar que a variável será nula utilize o null
const aprovado = true //Boolean = true, false (lógico)

console.log(typeof nome, n1, aprovado)

const a = [1, 2]
const b = a

console.log(b, a)

//(--var pré decremento var-- pós decremento)

