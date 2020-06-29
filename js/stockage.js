
class Stockage{
    constructor(){
        this.form = document.getElementById("form")
 
        this.form.addEventListener("submit", this.stockageInfosReservation)
        this.reservationValide=document.getElementById("reservationValide")
        let annuler = document.getElementById("Annuler")

        annuler.addEventListener("click",this.annuler)

    }//constructor





    check(){
            console.log(sessionStorage)
                        if(sessionStorage.getItem("echeance")){ //Si les minutes sont bien sauvegarder

                            
                            this.reservationValide.style.display="flex" // le bloc "reservationValide" soit visible 
                            sessionStorage.secIntervalId = setInterval(compteur.decompte,1000)
                            let adrss = document.getElementById("addressStation")
                            adrss.textContent = sessionStorage.getItem("donneReserv")

                              let x = document.getElementById("nameStation")
                              x.textContent = sessionStorage.getItem("donneeNomStation")

                               let y = document.getElementById("nomReserv")
                                 y.textContent =  localStorage.getItem("donneePrenom") +" "+ localStorage.getItem("donneeNom") 

                        }
                 

                    
    }


    stockageInfosReservation(e){
    
    Compteur.sauvegarde()

    

    let c = document.getElementById("contenantCanvas")
    //c.style.display="none"

            let infosReservation = document.getElementById("reservationValide")
            let panneau =document.getElementById("panneau")
            sessionStorage.nomReserv = document.getElementById("nomReserv")
            sessionStorage.stationReserv = document.getElementById("stationReserv")
            sessionStorage.nomStation = document.getElementById("nameStation")
            sessionStorage.addressStation = document.getElementById("addressStation")
            let rv = document.getElementById("reservationVelo")
            
       
        //infosReservation.style.display ="flex"
            //e.preventDefault()
            
            
            let donneeReservation = document.getElementById("contenantAdress").textContent
            sessionStorage.setItem("donneReserv", donneeReservation )
            var dR= sessionStorage.getItem("donneReserv")
           // let j = document.getElementById("addressStation")
            //j.textContent = sessionStorage.getItem("donneReserv")
            console.log("heeehoo")


            let nomStationReserv = document.getElementById("contenantNomStation").textContent
            sessionStorage.setItem("donneeNomStation", nomStationReserv)
            var nSR = sessionStorage.getItem("donneeNomStation")

            //let x = document.getElementById("nameStation")
            //x.textContent = sessionStorage.getItem("donneeNomStation")

            let donneeNom = document.getElementById("nom").value
            localStorage.setItem("donneeNom", donneeNom)
            donneeNom = localStorage.getItem("donneeNom")

           // let y = document.getElementById("nomReserv")
           // y.textContent =  localStorage.getItem("donneeNom") + localStorage.getItem("donneePrenom") 

            let donneePrenom = document.getElementById("prenom").value
            localStorage.setItem("donneePrenom", donneePrenom) 

            let validReserv = document.getElementById("reservationValide").textContent
            sessionStorage.setItem("validResev", validReserv)
            var vR = sessionStorage.getItem("validResev")
  


            //sessionStorage.setItem("reserValid",valid)
            
            let donneeStation = document.getElementById("")
            

                nomReserv.textContent= donneePrenom + " " + donneeNom 
                nomStation.textContent = nSR
                addressStation.textContent = donneeReservation 
                
                


            //nomReserv.textContent= donneePrenom + " " + donneeNom 

           // nomStation.textContent = nomStationReserv 

           // addressStation.textContent = donneeReservation 





    }//stockageInfosReservation


    annuler(){
            
            let h = document.getElementById("reservationValide")
                
                clearInterval(sessionStorage.secIntervalId)//Tu arrête tout
                    sessionStorage.clear()
                    h.style.display ="none"
                    localStorage.clear()
            }
        
}//class Stockage


