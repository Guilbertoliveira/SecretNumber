const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()


document.getElementById('menor-valor').textContent = menorValor;
document.getElementById('maior-valor').textContent = maiorValor;

function gerarNumeroAleatorio () {
    return (parseInt(Math.random()* maiorValor + 1));
}

console.log ('Número Secreto:', numeroSecreto);


