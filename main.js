

/* function borda(b){
   b = document.querySelector('#'+ b);
    b.style.border = " 5px solid red";


}

borda("sexta");
*/

const ingressos = [];

highLightCard = (selector) =>{
    var element = document.querySelector(selector);
    element.classList.toggle("card-highLigth");

}


checkKeyboardCode = () =>{
    document.addEventListener('keydown' , (event) =>{

        var nome = event.key;
        var code = event.code;

        alert(`Key pressed ${name} \r\n code value: ${code}`);

    }, false);
}


addKeyboardEventListeners = () => {

    document.addEventListener('keydown', (event)=>{

 

    var ingresso1 = document.getElementById('quinta');
    var ingresso2 = document.getElementById('sexta');
    var ingresso3 = document.getElementById('sabado');
    var ingresso4 = document.getElementById('domingo');

    var code  = event.code;
        if(code == 'Digit1'){
            ingresso1.classList.toggle("card-highLigth");
            ingresso2.classList.remove("card-highLigth");
            ingresso3.classList.remove("card-highLigth");
            ingresso4.classList.remove("card-highLigth");
        }

        if(code == 'Digit2'){
            ingresso1.classList.remove("card-highLigth");
            ingresso2.classList.toggle("card-highLigth");
            ingresso3.classList.remove("card-highLigth");
            ingresso4.classList.remove("card-highLigth");
        }

        if(code == 'Digit3'){
            ingresso1.classList.remove("card-highLigth");
            ingresso2.classList.remove("card-highLigth");
            ingresso3.classList.toggle("card-highLigth");
            ingresso4.classList.remove("card-highLigth");
        }

        if(code == 'Digit4'){
            ingresso1.classList.remove("card-highLigth");
            ingresso2.classList.remove("card-highLigth");
            ingresso3.classList.remove("card-highLigth");
            ingresso4.classList.toggle("card-highLigth");
        }

},false);
}



selectCard = (selector)=> {
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector);

}

showSelectedCards = () =>{
    if(ingressos.length > 0) alert(`ingressos selecionados ${ingressos}`);


}

addKeyboardEventListeners();
