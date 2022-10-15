let n1 = 0.7
let n2 = 0.1

/*passando para string para concatenar
console.log(n1.toString() + n2)
saída: 152.5
transformando o n1 em string definitivamente
n1 = n1.toString();

//Passando meu n1 para binário
console.log(n1.toString(2))

//Mostrar apenas duas casas decimais depois do ponto
console.log(n1.toFixed(2))

//Perguntar ao js se um número recebido de uma base de dados é inteiro retornará true ou false
console.log(Number.isInteger(n2))

//Perguntando ao js se determinado valor não é um número retornará true.

let temp = n1 * 'Oi'
console.log(Number.isNaN(temp))

//IEEE 74-2008 Um bagui estranho do JS
//era para ter
n1 += n2 //0.8
n1 += n2 //0.9
n1 += n2 //1.0
console.log(n1)
//O resultado será 0.9999999999999999


//IEEE 74-2008 Um bagui estranho do JS
//era para ter
n1 += n2 //0.8
n1 += n2 //0.9
n1 += n2 //1.0

n1 = n1.toFixed(2) //fazer assim não irá fazer o número virar inteiro
console.log(n1)
console.log(Number.isInteger(1.00)) //1.0 é realmente um número inteiro
//mas o n1 ainda não é inteiro


//E como resolver este mesmo problema com contas?

n1 = ((n1 * 100) + (n2 * 100)) / 100 //0.8
n1 = ((n1 * 100) + (n2 * 100)) / 100 //0.9
n1 = ((n1 * 100) + (n2 * 100)) / 100 //1.0

n1 = Number(n1.toFixed(2)) //Assim o n1 ficará inteiro
console.log(n1)
console.log(Number.isInteger(n1)) //agora sim ele será considerado inteiro


//resolvendo com expressões facilita o entendimento do código

n1 += n2 //0.8
n1 += n2 //0.9
n1 += n2 //1.0

n1 = Number(n1.toFixed(2)) //Assim o n1 ficará inteiro
console.log(n1)
console.log(Number.isInteger(n1)) //agora sim ele será considerado inteiro

*/

//resolvendo com expressões facilita o entendimento do código

n1 += n2 //0.8
n1 += n2 //0.9
n1 += n2 //1.0

n1 = Number(n1.toFixed(2)) //Assim o n1 ficará inteiro
console.log(n1)
console.log(Number.isInteger(n1)) //agora sim ele será considerado inteiro



