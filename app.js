//inserir texto de incio
// add numeros de tentativas, numero secreto.
//alert('BEM VINDO AO JOGO');
//alert('TENTE ACERTAR O NUMERO SECRETO');


function gerarNumeroAleatorio(index){
    return Math.floor(Math.random() * index + 1);
}

let listaNumerosDigitados = [];

function jogo () {
    let numeroDePosicoesAleatorias = parseInt(prompt('Quantos númeos você quer aleatorizar'))
    let numeroDeTentativas = 3
    let numeroSecreto = gerarNumeroAleatorio(numeroDePosicoesAleatorias);

    for(let tentativas = 0; tentativas < numeroDeTentativas; tentativas++){
        listaNumerosDigitados[tentativas] = parseInt(prompt(`Digite um número de 1 a ${numeroDePosicoesAleatorias}`));

        if(listaNumerosDigitados[tentativas] === numeroSecreto){
            alert('Parabéns, você acertou!');
            break;
        } else if(listaNumerosDigitados[tentativas] > numeroSecreto){
            alert('Você digitou um número maior que o número secreto');
        } else {
            alert('Você digitou um número menor que o número secreto');
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

function clicou() {
    jogo();
}


//while (tentativas > 0) {
  //  let numeroDigitado = parseInt(prompt('DIGITE UM NUMERO DE 0 A 9'));
  //  if (numeroDigitado === numeroSecreto) {
  //      alert(`PARABENS VOCÊ ACERTOU O ${numeroSecreto} AGORA VAMOS SUBIR O NÍVEL`);
 //       numeroSecreto = Math.floor(Math.random() * 20);
  //      tentativas = 5;
 //       while (tentativas > 0) {
  //          let numeroDigitado = parseInt(prompt('DIGITE UM NUMERO DE 0 A 20'));
  //          if (numeroDigitado === numeroSecreto) {
  //              alert(`PARABENS VOCÊ ACERTOU O ${numeroSecreto}`);
 //               break;
 //           } else if (numeroDigitado > numeroSecreto) {
 //               alert(`VOCÊ DIGITOU ${numeroDigitado} QUE É MAIOR QUE O NUMERO SECRETO`);
//            } else {
  //              alert(`VOCÊ DIGITOU ${numeroDigitado} QUE É MENOR QUE O NUMERO SECRETO`);
  //          }
 //           tentativas = tentativas - 1;
 //           alert(`VOCÊ AINDA TEM ${tentativas}`);
 //       }
 //       break;
 //   } else if (numeroDigitado > numeroSecreto) {
 //       alert(`VOCÊ DIGITOU ${numeroDigitado} QUE É MAIOR QUE O NUMERO SECRETO`);
 //   } else {
 //       alert(`VOCÊ DIGITOU ${numeroDigitado} QUE É MENOR QUE O NUMERO SECRETO`);
 //   }
 //   tentativas = tentativas - 1;
 //   alert(`VOCÊ AINDA TEM ${tentativas}`);
//}


