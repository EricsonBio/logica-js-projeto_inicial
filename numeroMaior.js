let arr = [];
let tamanhoDeLista = parseInt(prompt("Qual o tamanho da sua lista?"));

//função para gerar um lista aleatória
function geraLista(arr, tamanhoDeLista) {
    for(let i = 0; i < tamanhoDeLista; i++){
        arr[i] = Math.floor(Math.random() * 100);
    }
    return arr;
}