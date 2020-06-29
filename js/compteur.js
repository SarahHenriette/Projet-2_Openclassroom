class Compteur{
	constructor(){
		this.form = document.getElementById("form");//balise html form qui contient le formulaire
		this.form.addEventListener("submit",this.initTimer.bind(this));//au click du bouton d'envoie du formulaire Activation du compteur
		this.secondes=document.getElementById("secondes");//balise html secondes qui contient les secondes
		this.minutes=document.getElementById("minutes");//balise html minutes qui contient les minutes
		this.compteur=document.getElementById("compteur");//balise html compteur qui contient les balises secondes et minutes
		this.reservationValide=document.getElementById("reservationValide")
		

		window.scrollBy(0,window.innerHeight )
	}//constructor



	//Fonction qui initialise le compteur a 20minutes
	//et declenche le decompte du compteur
	initTimer(e){
		
		let infosReservation = document.getElementById("reservationValide")
		sessionStorage.infoRev =document.getElementById("reservationValide").textContent
  		var data = sessionStorage.getItem("infoRev")
  		if(data){infosReservation.style.display ="flex"}
		let panneau=document.getElementById("panneau")
		let carte=document.getElementById("carte")
		let canvas=document.getElementById("contenantCanvas")
		let form=document.getElementById("form")
		let premierBoutonReservation=document.getElementById("reservation")   
        let inputs = document.getElementById("contenantInputs")
 		let infos = document.getElementById("infos")
		let indiqueSelectMarqueur= document.getElementById("indiqueSelectMarqueur")
		let infosStation = document.getElementById("infoStation")


		//canvas.style.display="none"
		//infoStation.style.display="none"
		//infosReservation.style.display ="flex"
		console.log(this)
		//panneau.style.display="none"
		carte.style.width="100%"
		
		//this.minutes.textContent=19 //rempli le contenu de la balise html minutes    
		//this.secondes.textContent=59//rempli le contenu de la balise html secondes


		sessionStorage.secIntervalId = setInterval(this.decompte,1000);//variable qui contient le decompte

			
			//sessionStorage.secIntervalId = setInterval(this.decompte,1000);
			//sessionStorage.secIntervalId = setInterval(this.,1000);
			//var compte = sessionStorage.getItem("secIntervalId")
		
	}

	static sauvegarde(){


		var debut = Date.now()//affiche la date actuelle
		
		var fin = debut + 1200000
		
		sessionStorage.setItem("echeance", fin)
		

		//verifier avec if si l'echeance est a  0
	}



		//Fonction qui permet de diminuer les secondes et les minutes
			decompte(){

		var tempsMaintenant = Date.now()//refaire un date now 
		
		var soustractionEcheance = sessionStorage.getItem("echeance") - tempsMaintenant//faire une soustraction de l'echeance et du nouveau date now ; faire dans une variable
		console.log(soustractionEcheance)
		var date = new Date(soustractionEcheance)//creer une date  a partir de la difference en timestamp
		
		var minutes = date.getMinutes() 
		console.log(minutes)//definir seconde = new date + getseconde et new date + getminute
		var secondes = date.getSeconds() 
		console.log(secondes)
		if(secondes < 10){
			secondes = "0" + secondes 
		}
		document.getElementById("minutes").textContent = minutes//afficher  dans le html les minutes et les secondes 
		document.getElementById("secondes").textContent = secondes 


		if(soustractionEcheance <= 0){//si les secondes et les minutes sont a 0 alors : 
							
					stockage.annuler()
				}
			}

				/*

			let sec 
			let min
 
			if(sessionStorage.getItem("min")){
				console.log("a trouver getItem min")
				sec = sessionStorage.getItem("sec")
				min = sessionStorage.getItem("min")
			}else{
				console.log("n'a pas trouvé")

				sec = Number(this.secondes.textContent)//transforme le contenu de la balise secondes en nombre
				min = Number(this.minutes.textContent)//transforme le contenu de la balise minutes en nombre
			}
			console.log(this.secondes.textContent)
			this.secondes.textContent = sec - 1 //diminue les secondes
			console.log(this.secondes.textContent)
			 	if(sec===0){ //si les secondes sont a 0 alor : 
			 		
					this.secondes.textContent = 59// Tu me les remets a 59
					this.minutes.textContent = min-1//et tu enleve 1 minute

				}
				if(sec===0 && min === 0){//si les secondes et les minutes sont a 0 alors : 
					clearInterval(this.secIntervalId)//Tu arrête tout
								
					this.compteur.textContent = "Reservation annuler"// Et tu remplace le contenu de la balise compteur par un paragraphe contenant "Reservation annuler"
			
				}

				sessionStorage.setItem("min",this.minutes.textContent) //Je sauvegarde les minutes
				sessionStorage.setItem("sec",this.secondes.textContent)//Je sauvegarde les secondes

				
				//this.test*/
		
		

}