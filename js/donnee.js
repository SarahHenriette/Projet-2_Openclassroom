class Donnee{

    static recupDeDonnee(){

    return fetch("https://api.jcdecaux.com/vls/v1/stations?contract=Cergy-pontoise&apiKey=147ca417b1fb4ad173cd04ffeba4f584fe639459")
    .then(function (response){
        console.log(response)
        
        return response.json()
    })

    
  
  
    }
}