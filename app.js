//inserir texto de incio
// add numeros de tentativas, numero secreto.
//alert('BEM VINDO AO JOGO');
//alert('TENTE ACERTAR O NUMERO SECRETO');

let numeroSecreto = Math.floor(Math.random() * 9);
let tentativas = 3;

while (tentativas > 0) {
    let numeroDigitado = parseInt(prompt('DIGITE UM NUMERO DE 0 A 9'));
    if (numeroDigitado === numeroSecreto) {
        alert(`PARABENS VOCÊ ACERTOU O ${numeroSecreto} AGORA VAMOS SUBIR O NÍVEL`);
        numeroSecreto = Math.floor(Math.random() * 20);
        tentativas = 5;
        while (tentativas > 0) {
            let numeroDigitado = parseInt(prompt('DIGITE UM NUMERO DE 0 A 20'));
            if (numeroDigitado === numeroSecreto) {
                alert(`PARABENS VOCÊ ACERTOU O ${numeroSecreto}`);
                break;
            } else if (numeroDigitado > numeroSecreto) {
                alert(`VOCÊ DIGITOU ${numeroDigitado} QUE É MAIOR QUE O NUMERO SECRETO`);
            } else {
                alert(`VOCÊ DIGITOU ${numeroDigitado} QUE É MENOR QUE O NUMERO SECRETO`);
            }
            tentativas = tentativas - 1;
            alert(`VOCÊ AINDA TEM ${tentativas}`);
        }
        break;
    } else if (numeroDigitado > numeroSecreto) {
        alert(`VOCÊ DIGITOU ${numeroDigitado} QUE É MAIOR QUE O NUMERO SECRETO`);
    } else {
        alert(`VOCÊ DIGITOU ${numeroDigitado} QUE É MENOR QUE O NUMERO SECRETO`);
    }
    tentativas = tentativas - 1;
    alert(`VOCÊ AINDA TEM ${tentativas}`);
}


