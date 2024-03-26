alert('Bem vindo ao jogo');

let numeroSecreto = 3;
let numeroEscolhido = parseInt(prompt('Digite um numero de 1 a 50'));

if(numeroSecreto == numeroEscolhido){
    alert('PARABÉNS VOCÊ ACERTOU');
    }else if(numeroEscolhido >  numeroSecreto ){ 
        alert('Você digotu um numero maior que o numero secreto');
     } else{
        alert('Você digitou um numero menor que o numero secreto');
      }