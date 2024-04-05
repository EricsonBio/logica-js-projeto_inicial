let soma = 0;
let listaNumerosDigitados = [];
function nota(soma){
    for (i = 0; i < 4; i++) {
    let nota = parseInt(prompt( + (i + 1) ));
    soma += nota;
    listaNumerosDigitados[i] = nota;
    }
}
let total = soma;
alert(`${soma}`);
alert(`${listaNumerosDigitados[0]}+, ${listaNumerosDigitados[1]}+, ${listaNumerosDigitados[2]} + ${listaNumerosDigitados[3]} = ${soma}`);
