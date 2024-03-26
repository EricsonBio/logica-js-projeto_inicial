// alert inserir um texto
alert('Bem vindo ao jogo, tente desccobrir o numero secreto');
// let utilizado para declarar uma variavel, utiliza-se o sinal de "=" para atribuir o valor
let numeroSecreto = Math.floor(Math.random()*15);
let numeroTentativas = 0;
// if usa para testar uma logica
while (numeroTentativas <= 2){
    let numeroEscolhido = parseInt(prompt('Digite um numero de 0 a 15'));
    if (numeroSecreto == numeroEscolhido) {
    alert(`PARABÉNS VOCÊ ACERTOU O NUMERO ${numeroSecreto}`);
    break;
} else if (numeroEscolhido > numeroSecreto) {
    alert(`Você digitou ${numeroEscolhido} que é maior que o numero secreto`);
} else {
    alert(`Você digitou ${numeroEscolhido} que é menor que o numero secreto`);
}
    numeroTentativas = numeroTentativas + 1;
}       
