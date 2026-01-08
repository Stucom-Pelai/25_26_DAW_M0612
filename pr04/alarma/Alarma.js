export class Alarma {
    set titol(titol) {
        this._titol = titol;
    }
    set hora(hora) {
        this._hora = hora;
    }
    set minut(minut) {
        this._minut = minut;
    }
    set segon(segon) {
        this._segon = segon;
    }
    set musica(musica) {
        this._musica = musica
    }
    set activa(activa) {
        this._activa = activa
    }
    get titol() {
        return this._titol
    }
    get hora() {
        return this._hora;
    }
    get minut() {
        return this._minut;
    }
    get segon() {
        return this._segon;
    }
    get hora_completa() {
        return this.hora + ":" + this.minut + ":" + this.segon;
    }
    get musica() {
        return this._musica
    }
    get activa() {
        return this._activa
    }
    constructor(titol = "Default", hora = 0, minut = 0, segon = 0, musica = "default.mp3", activa = true) {
        this.titol = titol
        this.hora = hora
        this.minut = minut
        this.segon = segon
        this.musica = musica

        this.activaAlarma()
    }
    desactivaAlarma() {
        window.clearInterval(this.refInterval);
        this.activa=false
    }
    activaAlarma() {
        this.refInterval = window.setInterval( ()=> {
            let data = new Date();
            let hora_actual = data.getDate();
            let minut_actual = data.getMinutes();
            let segon_actual = data.getSeconds();
            if (this.hora == hora_actual && this.minut == minut_actual && this.segon == segon_actual) {
                console.log("ALARMA!!!")
            } else {
                console.log(this.hora + "=?" + hora_actual 
                    + " minut:" + this.minut + "=?" + minut_actual + " segon:" + this.segon + "=?" + segon_actual)
            }
        }, 1000)
        this.activa=true
    }
    generaCodiHTML(index) {
        return `<div><h2>` + this.titol + `</h2>
                    <div> hora alarma: ${this.hora_completa} </div>
                    <div> musica: ${this.musica}</div>
                    <div> activa:${this.activa}</div>
                    <button onclick="activaAlarma(${index})">ACTIVA</button>
                     <button onclick="desactivaAlarma(${index})">DESACTIVA</button>
                </div>`;
    }
}
