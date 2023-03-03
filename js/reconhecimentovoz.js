//parte padrao do projeto
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()
//fim da parte padrao do projeto 


const elementoChute = document.getElementById('chute');


//reconhecendo a voz 

recognition.addEventListener('result', (e)=> {
   chute = e.results[0][0].transcript
   ChuteNaTela(chute)
})

function ChuteNaTela(chute){
   elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
   `
}