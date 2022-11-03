//Notas sobre funções: É melhor ter uma função para cada coisa específica do que ter uma função gigante que faça tudo. No caso de uma calculadora é bom ter uma função para a soma, outra para a subtração, outra para a multiplicação, etc.

//Também posso criar uma variável ou constante com uma função inteira dentro assim:

//código com arrow function (bem menor)
const raiz = n => n ** 0.5 //um número elevado a 0.5 é a sua propria raiz quadrada

console.log(raiz(9)) //Aqui eu estou pedindo para exibir na tela o resultado da raiz quadrada de 9
console.log(25 ** 0.5)

//Existe alguma forma de simplificar o código de função que possui somente uma linha e somente um parâmetro? Sim, utilizando arrow function => ↑↑↑

//código sem arrow function
//const raiz = function(n) {
//     return n ** 0.5; //um número elevado a 0.5 é a sua propria raiz quadrada
// };

// console.log(raiz(9)) //Aqui eu estou pedindo para exibir na tela o resultado da raiz quadrada de 9
// console.log(25 ** 0.5)







// //fazendo uma função que recebe 2 valores
// function soma(x = 1, y = 1){
//     const resultado = x + y// Esta constante com o nome resultado só é válida aqui dentro da function porque elea é de escopo local, isto quer dizer que eu posso criar fora daqui uma const com o mesmo nome recebendo o valor desta função para exibir os dados desta function


//     return resultado //o que significa? Isso significa que a minha const resultado irá retornar a soma de x + y e este return resultado serve para que quando eu digitar o meu console.log(resultado) o valor que está dentro da minha variável seja exibido na tela.
//     //E mais uma coisa. Tudo que estiver abaixo de return em uma função será ignorado pois quando se coloca um return ele já indica que é somente para retornar valores que estão acima dele. A não ser que você utilize estruturas condicionais como eu utilizei em um código lá em baixo ↓↓

// }
// const resultado = soma(2,2) 
// //isto significa que eu estou atribuíndo o valor de 2 para x e 2 para y na minha função soma
// //Se eu colocasse assim resultado = soma() e eu mandasse exibir com console.log o meu valor iria retornar NaN, da mesma forma, se eu declarasse a const assim const resultado = soma(5) também iria me retornar um valor NaN, para que isto não aconteça eu aprendi a declarar um valor padrão lá em cima na função observe ↑↑. Agora se eu colocar const resultado = soma() irá  aparecer a soma dos dois valores que eu coloquei lá em cima, da mesma forma, se eu colocar const resultado = soma(5) eu estarei atribuindo somente o valor de x que irá ser somado com o valor de y padrão que é 1 e por fim, se eu declarar const resultado = soma(5, 3) quando eu pedir para exibir serão ignorados os valores parão de x e y e irá ser colocado os novos valores que são 5 + 3

// console.log(resultado) 
// console.log(soma(4,9))
// console.log(soma(3,9))

// Em JS os programas que mais vamos fazer serão funções que se comunicam entre si trocando informações, assim como uma calculadora que tem as divisões, somas, subtrações e multiplicações cada um tem sua função



// function saudacao(nome){ //Coloquei um parâmetro nome na minha função que funciona come se fosse uma variável e eu posso usar ele onde eu quiser na minha função, ele não funciona fora da minha função. Por ex., se eu digitasse console.log(nome) fora desta função, nada seria retornado para mim, para eu utilizar o valor desta função fora dela, eu tenho que criar uma variável para receber esta função como eu fiz lá em baixo
//     let data = new Date()
//     let hora = data.getHours()
    
//     if (hora > 0 && hora < 12){
        
//         return `Bom dia! ${nome}`

//     }else if (hora > 12 && hora < 18){
        
//         return `Boa tarde! ${nome}`

//     }else{
        
//         return `Boa noite! ${nome}`
//     }
// }
// const variavel = saudacao('Ithalo') //aqui a minha variável variavel está recebendo a minha função saudação com meu nome como parâmetro
// console.log(variavel)//Estou chamando a função, quando for chamar a função nunca esqueça de colocar os parêntesis



//Como retornar um valor de uma função para uma variável? 
//Usando o return

// function saudacao(nome){ //Coloquei um parâmetro nome na minha função que funciona come se fosse uma variável
//     let data = new Date()
//     let hora = data.getHours()
    
//     if (hora > 0 && hora < 12){
//      
//         return `Bom dia! ${nome}`

//     }else if (hora > 12 && hora < 18){
//         
//         return `Boa tarde! ${nome}` //Estes meus returns estão substituindo meus console.log() e além disso se eu não colocar um return a minha função vai retornar um valor undefined, para isso não acontecer eu usei o return

//     }else{
//         
//         return `Boa noite! ${nome}`
//     }
// }
// const variavel = saudacao('Luiz')
// saudacao(variavel)//Estou chamando a função, qaundo for chamar a função nunca esqueça de colocar os parêntesis