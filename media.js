//crie um programa que calcule a media de quatro notas e emite um alerta mostrando as notas e se os alunos passaram baseando-se na média.
//os pesos das duas primeiras notas devem ser devem ser menores que os das outras notas.

let soma = 0;
let listaNumerosDigitados = [];

for (i = 0; i < 4; i++) {
    let nota = parseInt(prompt("digite a nota do " + (i + 1) + "° bimestre"));
    soma += nota
    listaNumerosDigitados[i] = nota;
}

let media = soma / 4;

alert(`sua média é + ${media}`);
alert(`a nota dos bimestres são:${listaNumerosDigitados[0]}, ${listaNumerosDigitados[1]}, ${listaNumerosDigitados[2]} e ${listaNumerosDigitados[3]}`);

//function somaNumeros(a, b){
//    let soma = a + b;
//   alert (`A soma dos valores ${a} e ${b} é ${soma}`)
//}
//let primeiroNumero = parseFloat(prompt('Digite o primeiro valor a ser somado'));
//let segundoNumero = parseFloat(prompt('Digite o segundo valor a ser somado'));

//somaNumeros(primeiroNumero, segundoNumero);