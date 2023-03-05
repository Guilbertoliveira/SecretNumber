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
    <h2 class="acertou">você acertou</h2>
    <h3 class="acertou">Numero secreto era ${numeroSecreto}</h3>
    `
   }
}

function maioroumenor (numero) {
    return numero > maiorValor || numero < menorValor;
}