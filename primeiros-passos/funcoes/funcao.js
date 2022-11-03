//fazendo uma função que recebe 2 valores
function soma(x, y){
    const resultado = x + y// Esta constante com o nome resultado só é válida aqui dentro da function porque elea é de escopo local, isto quer dizer que eu posso criar fora daqui uma const com o mesmo nome recebendo o valor desta função para exibir os dados desta function


    return resultado //o que significa? Isso significa que a minha const resultado irá retornar a soma de x + y e este return resultado serve para que quando eu digitar o meu console.log(resultado) o valor que está dentro da minha variável seja exibido na tela.
    //E mais uma coisa. Tudo que estiver abaixo de return em uma função será ignorado pois quando se coloca um return ele já indica que é somente para retornar valores que estão acima dele. A não ser que você utilize estruturas condicionais como eu utilizei em um código lá em baixo ↓↓

}
const resultado = soma(2,2)
console.log(resultado) //isso significa que eu estou atribuíndo o valor de 2 para x e 2 para y na minha função soma
console.log(soma(4,9))
console.log(soma(3,9))
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