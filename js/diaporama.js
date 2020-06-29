
class Diaporama{
	constructor(){
		this.slideIndex = 1 ;
		this.showImage(this.slideIndex)
	}




	plus(){

		this.showImage(this.slideIndex++)
	
	}

	avancer(){
		this.showImage(this.slideIndex++)
		clearInterval(interSlider)
		document.getElementById("bouton_play").style.display="flex";
		document.getElementById("bouton_pause").style.display="none";
	}

	reculer(){
		this.showImage(this.slideIndex--)
		clearInterval(interSlider)
		document.getElementById("bouton_play").style.display="flex";
		document.getElementById("bouton_pause").style.display="none";
		/*if(this.slideIndex === 1){
			console.log("je suis a 5")
			this.slideIndex =0 ;
		
		}*/
	}
	pause(){
		clearInterval(interSlider)
		document.getElementById("bouton_play").style.display="flex";
		document.getElementById("bouton_pause").style.display="none";
	}
	

	
	
	play(){
		interSlider= setInterval(diapo.plus.bind(diapo), 5000)
		document.getElementById("bouton_play").style.display="none";
		document.getElementById("bouton_pause").style.display="flex";
	}
	
	

	showImage(n){ //fonction qui montre les images
		console.log("valeur de n avant les if " + n)
		var slide = document.getElementsByClassName("images_diapo") //variable qui contient toutes les balises qui ont la class images_diapo
		console.log("contenant du slide = " + slide)
		console.log("taille du slide " + slide.length)
		if(n> slide.length){//si le parametre est plus grand que 5
			this.slideIndex = 1 //la valeur de l'index des diapos est de 1
		}
		if(n<1) { //si le parametre est plus petit que 1
			this.slideIndex= slide.length //la valeur de l'index des diapo est egal a 5
		};

	
		console.log("valeur de n apres les if " + n)
	
	
		for (var i = 0 ; i < slide.length-1; i++){//a chaque fois que i est inferieur a la taille de slide tu vas rajouter 1 a i
			slide[i].style.display="none"; //pour chaque element du slide tu vas mettre un diplay none
			console.log(slide[i])
		};
		slide[this.slideIndex-1].style.display="block";//quand l'element du slide a -1 tu le fait apparaitre 

		/*if(this.slideIndex === 6){
			console.log("je suis a 5")
			this.slideIndex = 7;
		}*/

	
		console.log(slide[this.slideIndex-1])
	
		
	}

	
}





/*class Diaporama{
	constructor(){
		this.slideIndex = 1;
		this.slide = document.getElementsByClassName("images_diapo")
		
		
		console.log(this.slideIndex)

		console.log(this.slide)
		this.showImage()


		document.getElementById("bouton_avancer").addEventListener("click", function(){
			showImage()
		} )

	}


	showImage(){ //fonction qui montre les images
		
		console.log("valeur de n avant les if " + this.slideIndex)
		 //variable qui contient toutes les balises qui ont la+1class images_diapo
		console.log("contenant du slide = " + this.slide )
		console.log("taille du slide " + this.slide .length)
		console.log(this.slideIndex)
		if(this.slideIndex> this.slide.length){//si le parametre est plus grand que 5
			this.slideIndex = 1 //la valeur de l'index des diapos est de 1
			
		}

		if(this.slideIndex<1) { //si le parametre est plus petit que 1
			this.slideIndex= this.slide.length //la valeur de l'index des diapo est egal a 5
		};
		console.log("valeur de n apres les if " + this.slideIndex)
	
	
		for (var i = 0 ; i < this.slide.length; i++){//a chaque fois que i est inferieur a la taille de slide tu vas rajouter 1 a i
			this.slide[i].style.display="none"; //pour chaque element du slide tu vas mettre un diplay none
			console.log(this.slide[i])
		};
		this.slide[this.slideIndex-1].style.display="block";//quand l'element du slide a -1 tu le fait apparaitre 
	
		console.log(this.slide[this.slideIndex-1])
	
		if(this.slideIndex=== 5){
			console.log("je suis arriver a  5")
			this.slideIndex=6
	
		}

		console.log(this.slideIndex)
		this.slideIndex = this.slideIndex + 1
		console.log(this.slideIndex)
	}



	avancer(){}



}*/

/*

var slideIndex =  1 //index des diapositifs
console.log("valeur de slideIndex = " + slideIndex)
showImage(slideIndex)

function plusIndex(n){
	showImage(slideIndex += n);
	clearInterval(intervalId)
}

function plus(){

	showImage(slideIndex++)

}
function showImage(n){ //fonction qui montre les images
	console.log("valeur de n avant les if " + n)
	var slide = document.getElementsByClassName("images_diapo") //variable qui contient toutes les balises qui ont la class images_diapo
	console.log("contenant du slide = " + slide)
	console.log("taille du slide " + slide.length)
	if(n> slide.length){//si le parametre est plus grand que 5
		slideIndex = 1 //la valeur de l'index des diapos est de 1
	}
	if(n<1) { //si le parametre est plus petit que 1
		slideIndex= slide.length //la valeur de l'index des diapo est egal a 5
	};
	console.log("valeur de n apres les if " + n)


	for (var i = 0 ; i < slide.length; i++){//a chaque fois que i est inferieur a la taille de slide tu vas rajouter 1 a i
		slide[i].style.display="none"; //pour chaque element du slide tu vas mettre un diplay none
		console.log(slide[i])
	};
	slide[slideIndex-1].style.display="block";//quand l'element du slide a -1 tu le fait apparaitre 

	console.log(slide[slideIndex-1])

	if(slideIndex=== 5){
		console.log("je suis arriver a  5")
		slideIndex=6

	}
}

var intervalId= setInterval(plus, 2000)


function pause(){
	clearInterval(intervalId)
}

document.getElementById("bouton_pause").addEventListener("click",pause)


function play(){
	intervalId= setInterval(plus, 2000)
}

document.getElementById("bouton_play").addEventListener("click",play)
*/

