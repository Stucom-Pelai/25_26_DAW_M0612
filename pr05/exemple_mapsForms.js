let usuaris = new Map();
usuaris.set("43526252W", { "nom": "Joan", "edat": "25" });
usuaris.set("43526253W", { "nom": "Maria", "edat": "30" });
usuaris.set("43526254W", { "nom": "Pere", "edat": "28" });
usuaris.set("nom", "taula usuaris")
usuaris.set("items", 99)

console.log(usuaris.get("43526252W").nom)
console.log(usuaris.get("43526252W").edat)

console.log("---NOM DEL MAP:", usuaris.get("nom"))
console.log("ITEMPS: ", usuaris.get("items"))
console.log("--for of keys--")
for (let dni of usuaris.keys()) {
    console.log(dni)
}
console.log("--for of values--")
for (let usuari of usuaris.values()) {
    console.log(usuari)
}

console.log("-------")
usuaris.delete("43526252W")
console.log(usuaris.has("43526252W"));
console.log(usuaris.has("43526254W"));
console.log("---- For of entries---")
for (let dni_usuari of usuaris.entries()) {
    console.log("-clau:-", dni_usuari[0])
    console.log("-valor-", dni_usuari[1])
}


document.getElementById("bnt_valida").onclick = clk_validaNomInput;

document.getElementById("btn_creaInput").onclick = function () {
    let nouInput = document.createElement("INPUT");
    nouInput.className = "nou_input";
    nouInput.title = "titol del nou input";
    nouInput.style.backgroundColor = "grey";

    document.getElementById("formulari").appendChild(nouInput);
    let nouSpan = document.createElement("SPAN")
    document.getElementById("formulari").appendChild(nouSpan);

    nouInput.addEventListener("click", clk_validaNomInput)
    nouInput.addEventListener("click", changeBlueBackground)
    //nouInput.onclick=clk_validaNomInput;
    //nouInput.onclick=changeBlueBackground;
}
document.body.addEventListener("click", changeRedBackground, { capture: true });

function changeRedBackground(event) {
    console.log("change red")
    //event.target.style.backgroundColor = "orange";
}
function changeBlueBackground(event) {
    console.log("change blue")
    event.target.style.backgroundColor = "lightblue";
}

function clk_validaNomInput(event) {
    let span_feedBack = event.target.nextElementSibling;

    if (event.target.value == "pep") {
        span_feedBack.innerHTML = "Hola Pep!"
        span_feedBack.style.color = "green"
    } else {
        span_feedBack.innerHTML = "I tu qui ets?"
        span_feedBack.style.color = "purple";

    }
}




let form_ex = document.forms["form_ex"];
form_ex["nick"].addEventListener("input", valida_nickForm)
form_ex.addEventListener("submit", valida_formulari);
function valida_formulari(evt) {
    let formOk = true;
    valida_nickForm() ? formOk : formOk = false;
    valida_enviarForm() ? formOk : formOk = false;
    if (!formOk) {
        evt.preventDefault();
    }
}

function valida_nickForm() {
    form_ex["nick"].setCustomValidity(''); //reset dels errors
    if (!form_ex["nick"].checkValidity()) {
        if (form_ex["nick"].validity.patternMismatch) { //tipus validacio
            form_ex["nick"].nextElementSibling.innerText = "només entre 2 i 4 lletres";
            form_ex["nick"].setCustomValidity("només entre 2 i 4 lletres")
            form_ex["nick"].reportValidity();
        }
        return false;
    } else {
        form_ex["nick"].nextElementSibling.innerText = "";
    }
    returntrue;
}
function valida_enviarForm() {
    form_ex["enviar"].setCustomValidity('');
    if (form_ex["enviar"].value == "no") {
        form_ex["enviar"].nextElementSibling.innerText = "Form no enviat";
        form_ex["enviar"].setCustomValidity('Selecciona "enviar" per enviar el form');
        form_ex["enviar"].validity.valid = false; //indiquem que no és valid
        form_ex["enviar"].reportValidity();
        return false;
    }
    return true;
}
