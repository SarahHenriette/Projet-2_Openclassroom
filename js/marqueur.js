class Marqueurs{

    createMarqueur(promesse, mymap){
        promesse.then(function (data){
            data.forEach(function(info){
              //console.log(info.position)
              //J'UTILISE LES DONNEES LATITUDE ET LONGITUDE POUR METTRE DES MARQUEURS
              var latitude = info.position.lat;
              var longitude = info.position.lng;
              //L.marker([latitude, longitude]).addTo(mymap)
        
              

              L.marker([latitude, longitude]).addTo(mymap).addEventListener("click",function(){
                console.log(this)
                console.log(info.name)
                console.log(info.available_bikes)// vélo disponible
                console.log(info.available_bike_stands)//places disponible
                console.log(info.bike_stands)

                

                var marker = L.marker([latitude, longitude]).addTo(mymap)
                marker.bindPopup(info.name).openPopup();

                if(sessionStorage.getItem("echeance")){
                  console.log("Tu peux pas faire une nouvelle reservation")
                }else{
               
                document.getElementById("contenantNomStation").textContent = info.name
                document.getElementById("contenantAdress").textContent = " " +  info.address
                document.getElementById("contenantEtat").textContent = " " + info.status
                document.getElementById("contenantVelibLibre").textContent= " " + info.available_bikes
                document.getElementById("contenantPlaceDispo").textContent= " " + info.available_bike_stands

                document.getElementById("infoStation").style.display="flex"
                document.getElementById("indiqueSelectMarqueur").style.display="none"
                //let form = document.getElementById("form")
                //let infos = document.getElementById("infos")

                let panneau = document.getElementById("panneau")
                panneau.style.display="flex"
               // panneau.style.width="54%"

                let carte = document.getElementById("carte")
                //carte.style.width="35%"
                infos.style.display="flex"
                form.style.display="flex"
               
              


                }
              })
          
          
            })
          })
          
    }
}

