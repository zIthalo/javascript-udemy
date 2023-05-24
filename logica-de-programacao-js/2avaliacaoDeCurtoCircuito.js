/*
false && true = false / true && true = true / false && false = false

esses operadores lógicos && e || eles fazem uma avaliação de curto circuito 
por exemplo, na opeação lógica && ele avalia a última expressão sendo ela verdadeira ou falsa (lembrando que se uma das avaliações for falsa o valor retornado será falso)

exemplificando: console.log("ithalo" && true && NaN) no meu console exibirá a última expressão falsa que no caso é o NaN

Já no caso do || ele exibirá a primeira expressão verdadeira ex:
console.log(null || undefined || "Ithalo" || "false") meu console exibirá o valor ithalo pois é o primeiro valor verdadeiro

FALSY VALUES:
0
null
udefined
NaN
false
"" '' `` (strings vazias são chamadas de falsy também)

literalmente qualquer coisa diferente disso acima é considerada verdadeira

Vamos aprender agora a fazer uma avaliação de curto circuito com o operador lógico &&;

function falaOi{
    return 'Oi';
}
const vaiExecutar = false;
ao invés de↓↓

if(vaiExecutar == false){
    cosole.log("")
}else{
    .........
}

podemos fazer assim:

console.log(vaiExecutar && falaOi())
já que minha const vaiExecutar é falsa ele irá me retornar o valor falso
____________________________________________________________________________________________

no caso do or || ele irá retornar o primeitro valor verdadeiro ex:

console.log(0 || null || "ithalo" || true) o valor exibido será o ithalo pois é o primeiro valor verdadeiro que aparece






podemos fazer uma avaliação condicional utilizando o ou (||) neste exemplo:

ao invés de:

let corUsuario = "red"
let corPadrão = "black"


if (corUsuario == true){
 ................
}else{
    ...............
}

podemos resolver assim:

const corUser = null
const corPadrao = corUser || "black"

console.log(corPadrao) no cosole irá aparecer o valor verdadeiro

*/ 

