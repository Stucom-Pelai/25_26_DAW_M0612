//Permet iniciar la finestra Despertador.html en el que es mostri la hora actual
const btn_mostra_despertador = document.getElementById("btn_mostra_despertador");
const btn_tanca_despertador = document.getElementById("btn_tanca_despertador");
let ref_window;
btn_mostra_despertador.onclick =  function(){
    let altura=screen.availHeight /2;
    let amplada = screen.availWidth/2;
    let width_window= 300;
    let height_window=300;

    ref_window = window.open("Despertador.html","Despertador",
        "width="+width_window+"px,height="+height_window+"px,toolbar=no,scrollbars=no,top="
        +(altura-height_window/2)+"px,left="+(amplada-width_window/2)+"px");
        // window.setTimeout(function() {
        //     ref_window.document.body.style.backgroundColor="blue";
        // }, 1000  );
}
btn_tanca_despertador.onclick= function(){
    ref_window.close();
}

const btn_set_alarma = document.getElementById("btn_set_alarma");
btn_set_alarma.onclick=function(){
    let hora = document.getElementById("inp_hora").value;
    let minut= document.getElementById("inp_minut").value;
    let segon= document.getElementById("inp_segons").value;

    // ref_window.document.getElementById("div_hora_alarma").innerHTML=hora+":"+minut+":"+segons;
    ref_window.creaAlarma(hora,minut,segon)
}

let colorFilla = "orange";
function getColorFilla() {
    return colorFilla;
}
var nouColor="green";
function mostraHoraFilla(){
    window.setInterval(function(){
        let hora = new Date();
        ref_window.document.getElementById("div_hora_actual").innerHTML = hora.getHours()
                                                                            +":"+hora.getMinutes()
                                                                            +":"+hora.getSeconds();
    },1000)
}


let llista_numeros = new Array(5,3,"Hola")
llista_numeros.length=10;
console.log(llista_numeros);
llista_numeros[20]="ultim";
console.log(llista_numeros);
llista_numeros.length=3;
console.log(llista_numeros);
llista_numeros[9]=new Array("Jose","Lito");
console.log(llista_numeros);
console.log(llista_numeros[9][1])

let llista_valors = ["hello","array"]
console.log(llista_valors);
llista_valors[1]=["Maria","Antonieta"];
console.log(llista_valors);


for(let k=0;  k < llista_numeros.length;k++){
    console.log(k+"-"+llista_numeros[k]);
}

llista_numeros.forEach( function(value,index){
    console.log(index+"::"+value);
})


llista_numeros["titol"]="llista numeros";
llista_numeros.modul=" entorn client";
console.log(llista_numeros);
console.log(llista_numeros["titol"]);
console.log(llista_numeros.titol);


//TODO VEURE SPLICE
llista_numeros= new Array(10);
for(let k=0;k<llista_numeros.length;k++){
    llista_numeros[k]=k;
}
llista_numeros.splice(2,3)
console.log(llista_numeros);
llista_numeros.splice(llista_numeros.length,0,"hi","world")
console.log(llista_numeros)
// llista_numeros.splice(2,10)
llista_numeros.length=2;
console.log(llista_numeros)


