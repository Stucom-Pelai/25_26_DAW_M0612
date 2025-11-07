console.log("Hola Mon");
console.log("Que tal?");
//alert("Hola Mon");
document.getElementById("exempleDiv").innerHTML = "Benvingut a JavaScript";
document.getElementById("btnEnviar")


function mostraMissatge(){
    //let nomusuari = window.prompt("Com et dius?");
    let nomusuari = document.getElementById("inputNom").value;
    document.getElementById("exempleDiv").innerHTML=" <h1>Hola</h1> " + nomusuari;
    let edat = document.getElementById("inputEdat").value;
    //let edat= prompt("Quants anys tens?");
    let proximaEdat = parseInt( edat)+10;
    // NaN != NaN
    if( isNaN(proximaEdat) ){
        document.getElementById("exempleDiv").innerHTML="Si us plau, introdueix un número vàlid a l'edat";
        document.getElementById("inputEdat").style.backgroundColor="red";
    }else{
        document.getElementById("exempleDiv").innerHTML="En 10 anys tindràs " + proximaEdat + " anys.";
        document.getElementById("inputEdat").style.backgroundColor="green";
    }

    
}