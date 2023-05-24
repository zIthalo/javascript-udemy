//js/app.js ← utilizei esta técnica para criar uma pasta com um arquivo dentro

function meuEscopo(){ //Nesta função eu estou pegando a minha tag form e colocando uma função quando eu pressionar o botão de enviar, que irá gerar um alert(1)
    const form = document.querySelector('.form')
    // form.onsubmit = function(evento){
    //     evento.preventDefault();//Toda vez que eu clico no botão de enviar a minha página atualiza por padrão, para retirar este padrão eu digitei evento.preventDefault() que consiste em colocar o nome da função + o preventDefault(). Se eu não fizesse isso aquela mensagem do console 'foi enviado' não iria aparecer
    //     alert(1);
    //     console.log('Foi enviado')
    //esta foi uma forma de fazer, vejamos outra ↓
    // };
    // let contador = 1
    // function recebeEventoForm(evento){//Toda vez que coloco um nome dentro dos parêntesis da minha função é como se ue estivesse criando uma variável para ela é tanto que quando eu quis tirar um padrão da minha função eu chamei ela pelo nome dos parêntesis e adicionei o preventDefault()
    //     evento.preventDefault();
    //     console.log(`Form não enviado ${contador}`)
    //     contador++
    // }
    // form.addEventListener('submit', recebeEventoForm);

   
    function recebeEventoForm(evento){
       
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();

//para que a função funcione eu tenho que chamar ela após declarála