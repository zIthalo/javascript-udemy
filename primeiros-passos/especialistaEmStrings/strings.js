//Existe uma forma de colocar aspas duplas em uma parte de uma string que já tenha as aspas duplas, que é colocando a contra barra na frente das aspas ex:↓↓
let umastring = "um \"texto\""
//Se eu quisesse mostrar uma barra invertida nesse texto eu faria: let umastring = "um \\texto" assim apareceria no console somente uma barra invertida
console.log(umastring)

//Strings são indexadas, ou seja, têm indices que vão de 0 até o fim ex:
/*
                     01234567
    let umastring = "um texto"
Essa cadeia de caracteres pussui 7 índices
se você quiser ver a letra que está no índice 4 você faria assim:

console.log(umastring[4])

você também pode fazer isso para qualquer índice
Se você colocar qualquer índice que não existir irá retornar um valor undefined

outra forma de fazer o mesmo código seria: 
console.log(umastring.charAt(4)) isso também mostraria o caractere que está na posição 4

Para concatenar textos faça:

console.log(umastring.concat(' ', 'em', ' ', 'um lindo dia'))

a saída seria:
Um texto em um lindo dia

**mas faça isso com template strings que ficará muito mais fácil, assim:

console.log(`${umastring} em um lindo dia`) ;)

--Se você quiser saber em qual índice começa uma palavra faça: (também serve para achar letras)

console.log(umastring.indexOf('texto'))

vai retornar 3

console.log(umastring.indexOf('o', 3))

Lê-se: Quero achar a primeira letra 'o' apartir do índice 3

--Se você quisesse saber qual o índice de trás para frente:

console.log(umastring.lastIndexOf('t', 5))

lê-se: quero saber onde encontro uma letra t do índice 5 até o 0

Se você quiser substituir uma palavra de um texto faça assim:
console.log(umastring.replace('um', 'outro'))

Lê-se: subistitua 'um' por 'outro'

Se você quiser pegar uma palavra específica da sua string faça:

console.log(umastring.slice(1,5))

Lê-se: Pegue tudo que estiver do índice 1 ao índice 6 

Tudo em MAIÚSCULAS:

console.log(umastring.tuUpperCase())

Tudo em Minúsculas

console.log(umastring.toLowerCase())

se você quiser ver quantas palavras tem na sua digitação
console.log(umastring.split(' '))

Entende-se que este comando vai retornar uma array somente com as palavras digitadas mas sem os espaços entre elas

Se você quiser mostrar as palavras sem alguma letra ou palavra é só digitar entre as aspas qual palvra ou letra você quer retirar

para ver todos esses comandos você pode ir no site w3schools, no site da mozilla e pesquisar pela documentação js






*/ 