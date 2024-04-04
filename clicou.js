//let contador = 0

//function clicou(){
//    contador++;
 //   alert (`VOCE CLICOU ${contador}`);
//}
//function zerarContador() {
//    contador = 0;
//}


function gerarNumeroAleatorio(index){
    return Math.floor(Math.random() * index + 1);
}
let listadeNumerosDigitados = []

function jogo () {

    let numeroDePosicoesAleatorias = parseInt(prompt('Quantos númeos você quer aleatorizar'))
    let numeroDeTentativas = parseInt(prompt('Em quantas tentativas você quer tentar adivinhas?'))
    let numeroSecreto = gerarNumeroAleatorio(numeroDePosicoesAleatorias);

    for(let tentativas = 0; tentativas < numeroDeTentativas; tentativas++){
    listadeNumerosDigitados [tentativas] = parseInt(prompt(`Digite um número de 1 a ${numeroDePosicoesAleatorias}`))

    if(listaNumerosDigitados[tentativas] === numeroSecreto){
        alert(`Parabéns! você acertou ${numeroSecreto} era o numero secreto!`);
        break;
    } else if(listaNumerosDigitados[tentativas] > numeroSecreto){
        alert(`Você digitou  ${numeroDigitado} que é um número maior que o número secreto`);
    } else {
        alert(`Você digitou ${numeroDigitado} que é um número menor que o número secreto`);
    }
    if(tentativas === numeroDeTentativas){
        alert(`Suas tentativas acabaram`);
    } else if (tentativas <= numeroDeTentativas){
        alert(`você ainda tem  ${numeroDeTentativas - tentativas - 1} tentativas`);   
    }else{
        alert(`você ainda tem  ${numeroDePosicoesAleatorias - tentativas - 1} tentativa`);
    }    
}
alert(`Os números que você chutou são: ${listaNumerosDigitados[0]}, ${listaNumerosDigitados[1]} e ${listaNumerosDigitados[2]}` )
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
if(tentativas < numeroDeTentativas){
    alert(`Você acertou com ${tentativas} ${palavraTentativa}`)
}
} 

function iniciar() {
jogo();
}



     //   if(numeroDigitado === numeroSecreto){
      //      alert(`Parabéns! você acertou ${numeroSecreto} era o numero secreto!`);
      //      break;
      //  } else if(numeroDigitado > numeroSecreto){
     //       alert('Você digitou um número maior que o número secreto');
     //   } else {
     //       alert('Você digitou um número menor que o número secreto');
      //  }
    //    if(tentativas === numeroDeTentativas){
    //        alert(`Suas tentativas acabaram`);
     //   } else if (tentativas <= numeroDeTentativas){
    //        alert(`você ainda tem  ${numeroDeTentativas - tentativas - 1} tentativas`);   
     //   }else{
    //        alert(`você ainda tem  ${numeroDePosicoesAleatorias - tentativas - 1} tentativa`);
//
     //       let numeroDigitado = parseInt(prompt(`${numeroDigitado}`));
     //       listaNumerosDigitados.push(numeroDigitado)
     //       alert(listaNumerosDigitados[i]);
//
     //   }    
   // }
   // let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
 //   if(tentativas < 4){
 //       alert(`Você acertou com ${tentativas} ${palavraTentativa}`)
  //  }
//} 
//
//function iniciar() {
 //   jogo();
//}