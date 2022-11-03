//--CRIANDO UM OBJETO CRIANDO UMA VARIÁVEL-----
const pessoa1 = {
    nome: 'Ithalo',
    sobrenome: 'Willian',
    idade:25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está dizendo oi..`) // a palavrinha this aqui está servindo para chamar cada atributo do objeto mas você irá enender bem mais a fundo sobre esta palavrinha mais para frente
    },
    fala2(){
        console.log(`A minha idade atual é de ${this.idade}`)
    },
    incermentaIdade(){
        this.idade++
        console.log(`A minhha idade em 2023 será de ${this.idade} anos`)
        //Estes comandos fala2 e incrementaIdade vieram da minha criatividade, inclusive a forma para mostrar a minha idade em 2023 também foi criatividade minha
    }
}//Quando uma função está dentro de uma variável ou objeto ela é chamada de método

console.log(pessoa1.fala(), '\n', pessoa1.fala2(), '\n', pessoa1.incermentaIdade())
//Segundo o professor, objetos e funções são o coração do Java Script







//-----CRIANDO UMA FUNÇÃO QUE CRIA OBJETOS-----
//Também conhecida como função factory, uma função que fabrica objetos
    // function criaPessoa(nome, sobrenome, idade){//Aqui são os parâmetros de uma função
    //     return{nome,sobrenome, idade} //simplifiquei todo o código
    // }
    // const pessoa1 = criaPessoa('Ithalo', 'Willian', 25)//Aqui são os argumentos que irão para uma função. Argumento é um valor que vai para um parâmetro.
    // const pessoa2 = criaPessoa('Hemilly', 'Maria', 25)
    // const pessoa3 = criaPessoa('Leila', 'Oliveira', 50)
    // const pessoa4 = criaPessoa('Joaldo', 'Maximino', 57)
    // const pessoa5 = criaPessoa('Nathalia', 'Cibelle', 29)
    // console.log( pessoa1.sobrenome, '\n',pessoa2.nome, '\n',pessoa3.nome,'\n', pessoa4.nome,'\n', pessoa5.nome)
   













//-----CRIANDO UM OBJETO-----
//quando eu quero criar um array eu uso [] e quando eu quero criar um objeto eu uso {} assim ↓↓
//objeto literal
// const pessoa1 = {
//     nome: 'Ithalo',
//     sobrenome: 'Willian',
//     idade: 25
// };
// console.log(pessoa1.nome) //é assim que acesso uma característica do meu objeto
// console.log(pessoa1.sobrenome)







// const array = [1,2,3]
// array.push(4)
// array[0] = 'ithalo'
// //array = 'outra' isso não funciona pois eu criei uma const, se fosse uma let, que é uma variável, eu poderia reatribuir valores
// console.log(array)
