let n1 = Number(prompt('Digite um número: '))
let raizQ
let inteiro
let nan
let arredondadoBaixo
let arredondadoAlto
let duasCasasDec

document.body.style = ('font-family:arial;')
document.body.innerHTML +=(`<h1> Seu número é ${n1}</h1> </br>`)
document.body.innerHTML +=(`A raíz quadrada de ${n1} é: ${n1 ** 0.5} </br>`)
document.body.innerHTML += (`${n1} é inteiro: ${Math.isInteger(n1)} </br>`)
document.body.innerHTML += (`É NaN: ${Number.isNaN(n1)}`)