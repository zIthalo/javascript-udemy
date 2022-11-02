function saudacao(nome){ //Coloquei um parâmetro nome na minha função que funciona come se fosse uma variável
    let data = new Date()
    let hora = data.getHours()
    
    if (hora > 0 && hora < 12){
        console.log(`Bom dia! ${nome}`)
        return `Bom dia! ${nome}`

    }else if (hora > 12 && hora < 18){
        console.log('Boa tarde! ' + nome)
        return `Boa tarde! ${nome}`

    }else{
        console.log('Boa noite! '+ nome)
        return `Boa noite! ${nome}`
    }
}
const variavel = saudacao('Luiz')
saudacao(variavel)//Estou chamando a função, quando for chamar a função nunca esqueça de colocar os parêntesis

//Como retornar um valor de uma função para uma variável? usando o return

// function saudacao(nome){ //Coloquei um parâmetro nome na minha função que funciona come se fosse uma variável
//     let data = new Date()
//     let hora = data.getHours()
    
//     if (hora > 0 && hora < 12){
//      
//         return `Bom dia! ${nome}`

//     }else if (hora > 12 && hora < 18){
//         
//         return `Boa tarde! ${nome}`

//     }else{
//         
//         return `Boa noite! ${nome}`
//     }
// }
// const variavel = saudacao('Luiz')
// saudacao(variavel)//Estou chamando a função, qaundo for chamar a função nunca esqueça de colocar os parêntesis