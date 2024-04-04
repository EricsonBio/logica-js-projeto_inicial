

let listaNumerosDigitados = [10,2,3];

for (let i = 0; i < 3; i++){
    let numeroDigitado = parseInt(prompt('digite um numero'));
    listaNumerosDigitados.push(numeroDigitado)
    alert(listaNumerosDigitados[i]);
}
