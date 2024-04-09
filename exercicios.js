//1-crie uma lista e some seus valores;
//2-qual o número maior em uma array;
//3-crie um array e mostre ela no sentido inverso;
//4-crie uma array e remova os itens duplicados;
//5-contar o número de vezes que o mesmo elemento aparece na array;
//6-crie uma função para calcular o fatorial de um número. Use lista;
//7-criando um array dentro de outro, e adicinando numeros aleatorios ao array

//1
function somaArray(arr){
    let soma = 0;
    for(let i = 0; i < arr.length; i++){
        soma += arr[i];
    }
    return soma;
}
//exemplo de uso da função
let lista = [1, 1, 4, 7, 2, 3, 15];
let soma = somaArray(lista);
alert(soma);
//a função retornará 12
//2
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
//3
function mostrarInveso(arr){
    let arrInversa = [];
    for(let i = arr.length - 1; i >= 0; i--){
        arrInversa.push(arr[i]);
    }
    return arrInversa;
}
alert(mostrarInveso(lista))

//4
let arrFiltro = lista.filter((valor, indice, self) => {
    return self.indexOf(valor) === indice;
});

alert (arrFiltro)

   
