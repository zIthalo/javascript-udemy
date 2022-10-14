console.log('Olá, mundo!') //isto é uma função comando escreval em java script

//declarando variáveis
// você quando utilizar aspas simples você pode até colocar aspas duplas em alguma palavra dentro das strings

//com aspas duplas você pode colocar aspas simples

//com crase você pode usar tanto as simples quanto as duplas e, inclusive utilizar template strings ${}

console.log(`Olá! Meu nome é "Ithalo". Estou aprendendo Java Script às`, 15,'da tarde')

/**
 * 
 * 
 * 
 */

/**IMC em js */

const nome = 'ithalo' //tudo que for string deve estar entre aspas
const sobrenome = 'willian'
const idade = 25
const peso = 84
const alturaEmM = 1.79
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM)
let anoNasc = 2022 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`)