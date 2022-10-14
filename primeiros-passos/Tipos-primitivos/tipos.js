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
 // Para passar uma string que estiver assim por exemplo: '5.2', para número eu tenhopp 3 opções mas a 3º é a melhor 1º parseInt('5.2') neste caso quando se tornasse número só iria pegar o 5 pois eu passei para inteiro, 2º parseFloat('5.2') neste caso pegaria o número completo 3º esta é a melhor Number('5.2') neste caso o JS vai reconhecer se é int ou float
 
