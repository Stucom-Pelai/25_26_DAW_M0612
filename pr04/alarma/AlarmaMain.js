import {Alarma} from "./Alarma.js"
let alarmes = [];
// let novaAlarma = new Alarma("bon dia",12,0,15,"serenata.mp3",true)
// console.log(novaAlarma.titol);

document.getElementById("btn_crea_alarma").onclick=creaAlarma;

function creaAlarma(){
    const titol = document.getElementById("input_titol").value;
    const hora = document.getElementById("input_hora").value;
    const minut= document.getElementById("input_minut").value;
    const segon = document.getElementById("input_segon").value;
    const musica = document.getElementById("input_musica").value;
    const novaAlarma = new Alarma(titol, hora, minut,segon, musica)

    alarmes.push(novaAlarma);
    actualitzaLlistaAlarmes();
}
function actualitzaLlistaAlarmes(){
    const div_llista_alarmes= document.getElementById("div_llista_alarmes")
    div_llista_alarmes.innerHTML=""
    alarmes.forEach(function(alarma, index){
        div_llista_alarmes.innerHTML+=index+"-"+alarma.generaCodiHTML(index)
    })
}
window.activaAlarma=function(index){
    alarmes[index].activaAlarma()
}
window.desactivaAlarma=function(index){
    alarmes[index].desactivaAlarma()
}
