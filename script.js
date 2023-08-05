const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

const lancamento = "24 oct 2024";

function countDown(){

    //formula para achar o valor e converter para segundos
    const dataLanc = new Date (lancamento);
    const hoje = new Date();
    const segtotal = (dataLanc - hoje)/ 1000;

    //converter para seus respectivos valores
    const finalDias = Math.floor(segtotal/60/60/24);
    const finalHoras = Math.floor(segtotal/60/60)%24;
    const finalMinutos = Math.floor(segtotal/60)%60;
    const finalSegundos = Math.floor(segtotal)%60;

    //valores para entrar no texto em HTML

    dia.innerHTML = formatoTempo(finalDias);
    hora.innerHTML = formatoTempo(finalHoras);
    minuto.innerHTML = formatoTempo(finalMinutos);
    segundo.innerHTML = formatoTempo(finalSegundos);

}

  /* função para acrescentar o 0 no  nas unidades
    Geralmente este "0" não é incluso*/

    function formatoTempo(tempo){
        return tempo < 10? `0${tempo}`  : tempo;
    }


setInterval(countDown,1000)