/*executa la funció rebuda per parámetre després de generar
un número aleatori de manera asíncrona passant el  número aleatori com a paràmetre*/
function generaAleatori(funcioAExecutar) {
    let ale;
    //generem el número aleatori de manera asíncrona i executem la funció passant el número com a paràmetre
    window.setTimeout(function generaNumero() {
        ale = Math.floor(Math.random() * 10) + 1;
        funcioAExecutar(ale)
    }, Math.floor(Math.random() * 100) * 10)
    console.log("executat generaAleatori")
}
//exemple de funció que volem que s'executi després d'haver generat el número aleatori
function comprovaNumeroIgual5(aleatori) {
    if (aleatori == 5) {
        console.log("  5 és =" + aleatori);
    } else { console.log("El 5 no és igual a " + aleatori); }
}

//exemple de funció que volem que s'executi després d'haver generat el número aleatori
function comprovaNumeroMajor6(aleatori) {
    if (aleatori > 6) {
        console.log(aleatori + " és >  6 ");
    } else { console.log(aleatori + " no és>6"); }
}
// let aleatori = generaAleatori();
generaAleatori(comprovaNumeroIgual5);
generaAleatori(comprovaNumeroMajor6);
generaAleatori(comprovaNumeroIgual5);







