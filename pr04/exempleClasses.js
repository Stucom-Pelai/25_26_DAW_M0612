let miObjeto={titol:"Es mi objeto",
                descripcio:"qué objeto más bonito"}
miObjeto.lema="Los objetos molan mucho";
miObjeto.mostraLema= function(){
    console.log("El lema és:"+miObjeto.lema)
}

console.log(miObjeto.titol)
console.log(miObjeto.descripcio)
console.log(miObjeto.lema)
miObjeto.mostraLema();
console.log("####EXEMPLE CLASSES AMB FUNCTION###")

function ClasseNova(){
    this.titol="Titol per defecte"
    this.lema=""
    this.descripcio="encara no has indicat una descripció"
    this.mostraLema=function(){
        console.log("El lema és:"+this.lema)
    }
    lema ="just code it";
    if(this.lema==""){
        this.lema=this.titol;
    }
}
let objecte2 = new ClasseNova()
objecte2.lema="pop don't stop";
objecte2.mostraLema();

let objecte3 = new ClasseNova();
objecte3.lema="JS som tots";
objecte3.mostraLema();


class Ordinador{
    set marca(marca){
        this._marca = marca+"*";
    }
    get marca(){
        return this._marca;
    }
    cpu="";
    preu;
    constructor(marca="", cpu="", preu=0){
        this.marca=marca;
        this.cpu=cpu;
        this.preu=preu;
    }
    get informacio(){
        return "Marca:"+this.marca
                +"cpu"+this.cpu
                +" preu:"+this.preu;
    }
}
let ordi1= new Ordinador("Asus","Intelligent",780);
console.log( ordi1.informacio);

