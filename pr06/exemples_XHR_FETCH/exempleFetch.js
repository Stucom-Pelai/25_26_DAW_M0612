const but_enviarFetch_GET = document.getElementById("enviarXHR");
const but_enviarFetch_POST = document.getElementById("enviarXHR_POST");
const div_resposta = document.getElementById("resposta");
const inp_nom = document.getElementById("inp_nom");

but_enviarFetch_GET.addEventListener("click", () => {
   const nom = inp_nom.value;
   const promiseFetch = fetch("exempleXHR_GET.php?n=" + nom,
      { method: "GET" }
   );
   promiseFetch.then(
      (resposta) => {
         resposta.json().then(
            (respostaJSON) => {
               console.log("Edat:", respostaJSON.edat, "nom:", respostaJSON.nom);
            }
         ).catch((error) => {
            console.log("Error al passar a JSON", error)
         })

      }
   ).catch((error) => {
      console.log("Error:", error)
   });
})

but_enviarFetch_POST.addEventListener("click", () => {
   const nom = inp_nom.value;
   const promiseFetch = fetch("exempleXHR_GET.php",
      {
         method: "POST",
         headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
         ,body:"n=" + nom
      }
   );
   promiseFetch.then(
      (resposta) => {
         resposta.json().then(
            (respostaJSON) => {
               console.log("Edat:", respostaJSON.edat, "nom:", respostaJSON.nom);
            }
         ).catch((error) => {
            console.log("Error al passar a JSON", error)
         })

      }
   ).catch((error) => {
      console.log("Error:", error)
   });
})