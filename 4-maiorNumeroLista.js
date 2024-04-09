function somaArray(arr){
    let soma = 0;
    for(let i = 0; i < arr.length; i++){
        soma += arr[i];
    }
    return soma;
}
let lista = [2, 4, 8, 16, 32, 64];
let soma = somaArray(lista);
alert(soma);

function maiorNumeroArray(arr){
    let maior = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maior){
            maior = arr[i];
        }
    }
    return maior;
}
alert(maiorNumeroArray(lista));