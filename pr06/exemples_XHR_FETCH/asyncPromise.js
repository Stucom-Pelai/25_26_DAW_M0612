

function generaAleatori(funcioAExecutar, funcioSiError) {
    let ale;
    //generem el número aleatori de manera asíncrona i executem la funció passant el número com a paràmetre
    window.setTimeout(function generaNumero() {
        ale = Math.floor(Math.random() * 10) + 1;
        //suposem que si no és un 1 és un éxit
        if (ale != 1) {
            console.log("exit!")
            funcioAExecutar(ale)
        } else {
            //si és un 1 és un error
            console.log("error");
            funcioSiError(ale)
        }

    }, Math.floor(Math.random() * 500) * 10)
    console.log("executat generaAleatori")
}
function valorIgualA1(numero) {
    console.log(numero + " és un valor igual a 1");
}
//generaAleatori(comprovaNumeroIgual5,valorIgualA1);
//generaAleatori(comprovaNumeroMajor6,valorIgualA1);

let promesaGeneraAleatori = new Promise(generaAleatori)


async function executaCodiAsyncron() {
    await promesaGeneraAleatori
        .then(comprovaNumeroIgual5)
        .catch(valorIgualA1)
    await promesaGeneraAleatori.then(comprovaNumeroMajor6).catch(valorIgualA1)
    await promesaGeneraAleatori.then(comprovaNumeroIgual5).catch(valorIgualA1)
    console.log("Final de codi");

}
async function executaCodiAsincronAsincron(){
   await  executaCodiAsyncron();
   await  executaCodiAsyncron();
   console.log("Ara si que si");
}
executaCodiAsincronAsincron();
