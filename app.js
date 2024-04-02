//inserir texto de incio
// add numeros de tentativas, numero secreto.
//alert('BEM VINDO AO JOGO');
//alert('TENTE ACERTAR O NUMERO SECRETO');

let quantDNumerosAleatorios = parseInt(prompt('Quantos numeros aleatorios?'))
function numeroAleatorio(index){
    return Math.floor(Math.random() * index + 1);
}
let numeroSecreto = numeroAleatorio(quantDNumerosAleatorios);
for(let tentativas = 0; tentativas < 3; tentativas++){
    let numeroDigitado = parseInt(prompt(`Digite um numero de 1 a ${quantDNumerosAleatorios}`));
    if (numeroDigitado === numeroSecreto){
    alert (`Parabéns você acertou o numero era ${numeroSecreto}`)
break;
} else if(numeroDigitado > numeroSecreto){
    alert ('Você digitou um numero maior que o numero secreto');
} else{
    alert ('Você digitou um numero menor que o numero secreto');
}
if (tentativas ===3){
    alert ('suas tentativas acabaram')
    } else if (tentativas <2){
        alert(`Voce ainda tem ${2 - tentativas} tentativas`);
    }else{
            alert(`Voce ainda tem ${2 - tentativas} tentativas`)
        }
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


