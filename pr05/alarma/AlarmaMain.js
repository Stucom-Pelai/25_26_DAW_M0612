import {Alarma} from "./Alarma.js"
// let alarmes = [];
let alarmes = new Map();
// let novaAlarma = new Alarma("bon dia",12,0,15,"serenata.mp3",true)
// console.log(novaAlarma.titol);

document.getElementById("btn_crea_alarma").onclick=creaAlarma;

function creaAlarma(){
    const titol = document.getElementById("input_titol").value;
    const hora = document.getElementById("input_hora").value;
    const minut= document.getElementById("input_minut").value;
    const segon = document.getElementById("input_segon").value;
    const musica = document.getElementById("input_musica").value;
    const activa = document.getElementById("input_activa").checked;
    const novaAlarma = new Alarma(titol, hora, minut,segon, musica, activa)

    // alarmes.push(novaAlarma);
     alarmes.set(hora+":"+minut+":"+segon, novaAlarma);
    actualitzaLlistaAlarmes();
}
function actualitzaLlistaAlarmes(){
    const div_llista_alarmes= document.getElementById("div_llista_alarmes")
    div_llista_alarmes.innerHTML=""

    // alarmes.forEach(function(alarma, index){
        // div_llista_alarmes.innerHTML+=index+"-"+alarma.generaCodiHTML(index)
    // })
     for(let key of alarmes.keys()){  
        const alarma = alarmes.get(key)
        div_llista_alarmes.innerHTML+=key+"-"+alarma.generaCodiHTML(key)
     }
}
window.activaAlarma=function(key){
    // alarmes[index].activaAlarma()
    alarmes.get(key).activaAlarma();
}
window.desactivaAlarma=function(key){
    // alarmes[index].desactivaAlarma()
    alarmes.get(key).desactivaAlarma();
}

let form_alarma = document.forms["form_alarma"]
form_alarma["input_titol"].addEventListener("input",validaTitol);

function validaTitol(evt){
    const input_titol = form_alarma["input_titol"];
    input_titol.setCustomValidity('')
    if(input_titol.checkValidity()){
        evt.target.nextElementSibling.innerHTML=" OK !"
        evt.target.nextElementSibling.className="ok";
         evt.target.style.backgroundColor="none";
        console.log("Titol valid!");
    }else{
        console.log("titol Invalid")
        input_titol.setCustomValidity('Titol invalid, minim 3 caracters')

        evt.target.nextElementSibling.innerHTML="indica un minim de 3 caracters"
        evt.target.nextElementSibling.className="error";
         evt.target.style.backgroundColor="red";
        input_titol.reportValidity();
    }
}