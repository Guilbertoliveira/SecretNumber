let pontos = document.getElementById('chances');


function verificaValido(chute)
{
    const numero = parseInt(chute);

    if (Number.isNaN(numero)){ //se o numero for invalido
        console.log('valor invalido');
        elementoChute.innerHTML = `
        <div class="invalido">Você disse valor invalido</div>
        <span class="box invalido">${chute}</span>

        `
        return
    }

    if(maioroumenor(numero))
    {
      console.log(`valor invalido, precisa estar entre ${menorValor} - ${maiorValor}`);  
      elementoChute.innerHTML = `
      <div class="invalido">valor invalido, precisa estar entre ${menorValor} - ${maiorValor}</div>
      <span class="box invalido">${chute}</span>

      `
      return
    }

   if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <body><header><div class="chances"><p>Errou:</p><p id="chances">${pontos.textContent}</p></div></header>
    <main>
    <h2 class="acertou">você acertou</h2>
    <h3 class="acertou">Numero secreto era ${numeroSecreto}</h3>
    <button id="buttonStart">Começar Dnv</button></main><body>
    `
    console.log(ponto);
   } else if (numero < numeroSecreto) {
    elementoChute.innerHTML += `
     <div>O numero secreto é maior <i class="fa-solid fa-turn-up"></i></div>
    `
    return pontos.textContent = parseInt (pontos.textContent) + 1;

   } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O numero secreto é menor <i class="fa-solid fa-turn-down"></i></div>
   `
   return pontos.textContent = parseInt (pontos.textContent) + 1;

   }
}

function maioroumenor (numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', botao=> {
    if (botao.target.id == 'buttonStart') {
        window.location.reload()
    }
})



