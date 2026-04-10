const but_enviarXHR = document.getElementById("enviarXHR");
const but_enviarXHR_POST=document.getElementById("enviarXHR_POST");
const div_resposta= document.getElementById("resposta");
const inp_nom = document.getElementById("inp_nom");
but_enviarXHR.addEventListener("click",()=>{
    const xmlXHR= new XMLHttpRequest();
    const nom = inp_nom.value;
    xmlXHR.open("GET","exempleXHR_GET.php?n="+nom+"",true);
    xmlXHR.onreadystatechange=()=>{
        if(xmlXHR.readyState==4 ){
            if(xmlXHR.status==200){
                const resp = xmlXHR.responseText
                const respJSON= JSON.parse(resp);
                console.log(respJSON);
                div_resposta.innerHTML="Hola "+respJSON.nom
                +" la teva edat es de:"+respJSON.edat+" anys";
            }else{
                console.log("Recurs no accesible")
            }
        }
    }
    xmlXHR.send();
})

but_enviarXHR_POST.addEventListener("click",()=>{
    const xmlXHR = new XMLHttpRequest();
    xmlXHR.open("POST","exempleXHR_POST.php");
      xmlXHR.onreadystatechange=function(){
        if(xmlXHR.readyState==4){
            if(xmlXHR.status==200){
                const resp = xmlXHR.responseText
                const respJSON= JSON.parse(resp);
                console.log(respJSON);
                div_resposta.innerHTML="Hola "+respJSON.nom
                +" la teva edat es de:"+respJSON.edat+" anys";
            }else{
                console.log("URL incorrecte")
            }
        }
    }
    const formData = new FormData();
    formData.append("n",inp_nom.value);
    const arxius = document.getElementById("arxiu").files;
    formData.append("arxiu",arxius[0]);

    xmlXHR.send(formData);

    // xmlXHR.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
    // xmlXHR.send("n="+inp_nom.value);
})