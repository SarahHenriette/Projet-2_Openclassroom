
        
    //AFFICHE LA MAP
    let mymap = new Map()

    //JE RECUPERE TOUTES LES DONNEES DE CERGY PONTOISE
    //let donnee = new Donnee()
    
    //J'UTILISE LES DONNEES LATITUDE ET LONGITUDE POUR METTRE DES MARQUEURS
    let marqueurs = new Marqueurs()
    marqueurs.createMarqueur(Donnee.recupDeDonnee(), mymap)


    let formulaire = new Formulaire();
    let canvasElt = new Canvas()
 
    let compteur = new Compteur()
    let stockage = new Stockage()

  
    let diapo = new Diaporama()
    var interSlider= setInterval(diapo.plus.bind(diapo), 5000)
    document.getElementById("bouton_avancer").addEventListener("click", diapo.avancer.bind(diapo))
    document.getElementById("bouton_reculer").addEventListener("click", diapo.reculer.bind(diapo))
    document.getElementById("bouton_pause").addEventListener("click",diapo.pause.bind(diapo))
    document.getElementById("bouton_play").addEventListener("click",diapo.play.bind(diapo))

    stockage.check()
  
  /*
    let canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

   
    var radius = 10;
    var dragging = false;
   //canvas.width = window.innerWidth;
   //canvas.height = window.innerHeight;
    ctx.lineWidth = radius*2;

  console.log(canvas.width)
  console.log(canvas.height)
    var putPoint = function(e){
      if(dragging){
      ctx.lineTo(e.clientX,e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(e.clientX,e.clientY, radius, 0, Math.PI*2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(e.clientX,e.clientY)
      console.log("beuu")
      }
      
    }
    var engage = function(e){
      dragging=true;
      putPoint(e);
    }


    var disengage = function(){
      dragging=false;
    }

    canvas.addEventListener("mousedown", engage);
    canvas.addEventListener("mousemove", putPoint);
    canvas.addEventListener("mouseup", disengage);

*/

   
    /*
    .then(function (data){
      data.forEach(function(info){
        console.log(info.position)
        //J'UTILISE LES DONNEES LATITUDE ET LONGITUDE POUR METTRE DES MARQUEURS
        var latitude = info.position.lat;
        var longitude = info.position.lng;
        L.marker([latitude, longitude]).addTo(mymap)
      })
    })
    
  
///FONCTION POUR LES REQUETES
// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
/*function ajaxGet(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function () {
      if (req.status >= 200 && req.status < 400) {
          // Appelle la fonction callback en lui passant la réponse de la requête
          callback(req.responseText);
      } else {
          console.error(req.status + " " + req.statusText + " " + url);
      }
  });
  req.addEventListener("error", function () {
      console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);
}

//REQUETE DES DONNEES CERGY PONTOISE JCDECAUX
ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Cergy-pontoise&apiKey=147ca417b1fb4ad173cd04ffeba4f584fe639459", function(reponse){
  console.log(JSON.parse(reponse))
  var infosStationsCergyPontoise = JSON.parse(reponse);



//J'UTILISE LES DONNEES LATITUDE ET LONGITUDE POUR METTRE DES MARQUEURS
  infosStationsCergyPontoise.forEach(function (info){
    console.log(info.position)
    var latitude = info.position.lat;
    var longitude = info.position.lng;
    L.marker([latitude, longitude]).addTo(mymap)

    //MARQUEUR CLIQUABLE    
    L.marker([latitude, longitude]).addTo(mymap).addEventListener("click", function(){
      console.log(info.name)
      document.getElementById("adress").textContent += " " +  info.address
      document.getElementById("etat").textContent += " " + info.status
      console.log(info.totalStands.capacity)
      document.getElementById("velibLibre").textContent += " " + info.totalStands
    })
  })
})
*/


         
     
