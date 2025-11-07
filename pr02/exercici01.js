/*1.	Crea un document HTML amb un div amb id “llista_propietats”. 
Programa amb JS que es creï una llista amb els següents missatges 
i amb els valors obtinguts dinàmicament:
a.	Valor mínim que pot tenir un número JS
b.	Amplada total de la pantalla
c.	Amplada interna de la finestra
d.	Títol de la web
e.	Hora actual*/
//accedir a #llista_propietats
const div_llista_propietats = document.getElementById("llista_propietats");
//crear una funció que generi la llista
//function generaLlistaPropietats() {
let generaLlistaPropietats = function() {
    let hora_actual = new Date();
    //crear una llista dins #llista_propietats
    div_llista_propietats.innerHTML = `<ul> <li>Valor mínim que pot tenir un número JS:` + Number.MIN_VALUE + ` </li> 
                                    <li>Amplada total de la pantalla `+ screen.width + `</li> 
                                    <li>Amplada interna de la finestra`+ window.innerWidth + `</li>
                                    <li>Títol de la web ${document.title} </li>
                                    <li> Hora actual `+ hora_actual.getHours() + `:` +
                                                    hora_actual.getMinutes() + `:` +
                                                    hora_actual.getSeconds() + `</li>
                                    </ul>`;
    return function(){console.log("hurray!!!")};
}
let hurray = generaLlistaPropietats() ;
hurray();

let referenciaSetIntervalHora = null;

function creaInterval(){
    referenciaSetIntervalHora= window.setInterval(generaLlistaPropietats, 1000);
}
creaInterval(); 

let comptador=10;
function aturaSetIntervalHora(){
    window.clearInterval(referenciaSetIntervalHora);
}



let audio = new Audio();
audio.src="DRUMC0.WAV";
audio.canPlayType("audio/wav; codecs=1");
//audio.play();
// audio.loop=true;
const btn_play = document.getElementById("btn_play");
const btn_stop = document.getElementById("btn_stop");
const btn_pause= document.getElementById("btn_pause");
const btn_mute = document.getElementById("btn_mute");
const btn_vol_up = document.getElementById("btn_vol_up");
const btn_vol_down= document.getElementById("btn_vol_down");
const inp_vol_audio = document.getElementById("inp_vol_audio");
const inp_time = document.getElementById("inp_time");

btn_mute.onclick=clk_btn_mute;
btn_vol_up.onclick= clk_btn_vol_up;
btn_vol_down.onclick= clk_btn_vol_down;
inp_vol_audio.onchange= clk_inp_vol_audio;

function clk_inp_vol_audio(){
    audio.volume= inp_vol_audio.value;
}
function clk_btn_mute(){
    audio.muted = !audio.muted;
}
function clk_btn_vol_up(){
    if(audio.volume<=0.9){
        audio.volume+=0.1;
    }
    inp_vol_audio.value= audio.volume;
}
function clk_btn_vol_down(){
    if(audio.volume>=0.1){
        audio.volume-=0.1;
    }
    inp_vol_audio.value = audio.volume;
    
}

btn_play.style.backgroundColor="orange";
btn_play.onclick=playMusic;
let audio_actual="";
//  let refIntAudio;
function playMusic(){
    const select_music = document.getElementById("select_music");
   if(audio_actual !=  select_music.value){
        audio.src= select_music.value;
        audio_actual=select_music.value;
    }
    audio.oncanplay= function(){
        inp_time.max = audio.duration;
        inp_time.value= audio.currentTime;
        let refIntAudio= window.setInterval(function(){
            inp_time.value= audio.currentTime;
            if(audio.currentTime ==audio.duration ){
                clearInterval(refIntAudio);
            }
        },100)
        
    }
    audio.play();
}
btn_stop.onclick=stopMusic;
function stopMusic(){
    audio.pause();
    audio.currentTime=0;
}
btn_pause.onclick=pauseMusic
function pauseMusic(){
    audio.pause();
}

