function somaArray(arr){
    let soma = 0;
    for(let i = 0; i < arr.length; i++){
        soma += arr[i];
    }
    return soma;
}
let lista = [2, 4, 8, 16, 32, 66];
let soma = somaArray(lista);
alert(soma);