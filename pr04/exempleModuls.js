window.saluda=function(){
    console.log("Hola món des d'un mòdul!");
}

export function ClasseNova(){
    this.titol="Titol per defecte"
    this.lema=""
    this.descripcio="encara no has indicat una descripció"
    this.mostraLema=function(){
        console.log("El lema és:"+this.lema)
    }
    // lema ="just code it";
    if(this.lema==""){
        this.lema=this.titol;
    }
}