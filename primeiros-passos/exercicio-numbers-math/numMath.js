const n1 = Number(prompt('Digite um número: ')) //sempre transforme um pompt para number se você quser colocar valores numéricos nele, pois ele sempre retornará valores em string
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

document.body.style = ('font-family:arial;')

numeroTitulo.innerHTML = n1;
texto.innerHTML = '';
texto.innerHTML +=` <p>A raíz quadrada de ${n1} é: ${n1 ** 0.5}</p> <br>`;

texto.innerHTML += `<p>${n1} é inteiro: ${Math.isInteger(n1)}</p> <br>`;

texto.innerHTML += `<p>É NaN: ${Number.isNaN(n1)}</p> <br>`;

texto.innerHTML +=`<p>Este número arredondado para baixo fica: ${Math.floor(n1)}</p> <br>`;

texto.innerHTML += `<p>Este número arredondado para cima fica ${Math.ceil(n1)}</p> <br>`;
texto.innerHTML += `<p>Com duas casas decimais fica: ${n1.toFixed(2)}</p> <br>`;