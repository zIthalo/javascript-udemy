const alunos = ['Luiz', 'Maria', 'João']

console.log("____________________")

console.log(typeof alunos) // para saber o tipo da minha const ou let, neste caso meu array. Mas se eu somente colocar este comando ele irá me retornar que é um objeto, agora se eu utilizar o instanceof Array ele irá me retornar true ou false pra dizer se é mesmo de fato um array.
console.log("____________________")
console.log(alunos instanceof Array)

// /*Strings têm índices para cada letra e nos arrays temos índices para cada palavra ou dado que esteja dentro do mesmo */

//Mostrando quantos índices meu array possui console.log(alunos.length)

//assim estou subistituindo o valor dentro de um índice por outro
//alunos[0]= 'Eduardo';
//Neste caso ↓ eu estou adicionando um novo dado em um novo índice no meu array do qual eu não tenho, mas lempre-se esta não é a melhor forma de colocar valores dentro de um array o melhor jeito seria utilizando o alunos.push
// alunos[3] = 'Luiza';
// console.log(alunos)

// console.log(alunos)
// console.log(alunos[2])
// alunos[alunos.length] = 'Luiza'
// alunos[alunos.length] = 'Fábio'
// alunos[alunos.length] = 'Luana'
// console.log(alunos) //Desta forma eu estou colocando dados no meu array no fim dos indexes ou seja é como se eu estivesse digitando mais um dado dentro do meu array mas desta forma eu digitaria muito, para facilitar eu uso o .push()

//Desta forma eu digito menos para inserir um dado no fim do meu array é melhor do que usar alunos[alunos.length]
// alunos.push('Luiza')
// alunos.push ('Fábio')
// console.log(alunos)

//Se o .push() adiciona ao final o unshift() adiciona no começo
// alunos.unshift('Luiza')
// alunos.unshift('Fábio')
// console.log(alunos)

//Para remover um índice no final utilizamos o .pop() depois eu utilizei uma variável para guardar o valor que eu removi com .pop()
// const removidos = alunos.pop()
// console.log('Valores do seu array = ' + alunos)
// console.log('Os valores removidos do seu array com .pop() foram: ' + removidos)

//Se o .pop() remove do final o .shift() remove do começo
// const removido = alunos.shift()
// console.log(`Os valores removidos do seu array são: ${removido}`)
// console.log(`Os valores que têm no seu array são: ${alunos}`)

// Como apagar um valor de determinado índice sem mudar os índices do meu array?
// delete alunos[1]
// console.log('Este array terá no índice 1 o valor <1 empty item> ' + alunos)

//Como inserir um dado no final do array e mostrar na tela de um índice até outro índice? é só eu usar o .slice() se eu utilizar números positivos a conta será de frente para trás, se eu usar números negativos a conta será feita de trás para frente
// alunos.push('Luiza')
// alunos.push('Eduardo')
// console.log(alunos.slice(0,-1))