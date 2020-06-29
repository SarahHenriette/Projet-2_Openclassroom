class Formulaire {
    constructor(){
        this.reserv = document.getElementById("boutonReserver")

        this.reserv.addEventListener("click", this.afficheCanvas)

 

    }//constructor

    afficheCanvas(e){
        e.preventDefault()
 
        let nom = document.getElementById("nom").value
        let prenom = document.getElementById("prenom").value
        let infoStation=document.getElementById("contenantAdress").textContent
        let premierBoutonReservation=document.getElementById("reservation")   
        let inputs = document.getElementById("contenantInputs")

        if(nom.length > 1 && prenom.length > 1 && infoStation.length>1 ){
            console.log("eee")
        
                console.log("je fonctionne")
                contenantCanvas.style.display="flex";
                let canvasElt = new Canvas()
                inputs.style.display ="none";
                premierBoutonReservation.style.display="none"
                contenantCanvas.style.display ="flex"   
        }else{


              document.getElementById("nom").placeholder =  "Votre nom s'il vous plait";
              document.getElementById("nom").style.border = "#ff8523 solid 2px"


              document.getElementById("prenom").placeholder =  "Votre prenom s'il vous plait";
              document.getElementById("prenom").style.border = "#ff8523 solid 2px"

              document.getElementById("indiqueSelectMarqueur").style.border = "yellow solid 10px"
         
        
            
         }//else
    }//afficheCanvas

}//class Formulaire


