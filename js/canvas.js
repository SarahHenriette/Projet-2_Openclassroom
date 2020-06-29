
class Canvas{
 constructor (){
  this.canvas = document.getElementById("canvas");
  this.ctx = canvas.getContext("2d");
  this.resett = document.getElementById("reset")
this.canvas.width = canvas.clientWidth;
this.canvas.height = canvas.clientHeight;


this.radius = 5;
this.dragging = false;


//ctx.lineWidth = radius;
console.log(this.dragging)

console.log(this.canvas.width)
console.log(this.canvas.height)

 console.log("ok")
 

 //this.canvas.addEventListener("mousedown", this.essai)

 this.canvas.addEventListener("mousedown", this.engage)
 this.canvas.addEventListener("mousemove", this.putPoint)
 this.canvas.addEventListener("mouseup", this.disengage)
 this.resett.addEventListener("click", this.reset)
 
 this.canvas.addEventListener("touchstart", this.engage)
 this.canvas.addEventListener("touchmove", this.putPoint)
 this.canvas.addEventListener("touchend", this.disengage)
 this.resett.addEventListener("click", this.reset)
 
   

 
sessionStorage.setItem("canvas",this.canvas)
 }
//POUR DESSINER
essai(){
  console.log("essaiii")

}

engage(e){

  this.canvas = document.getElementById("canvas");
  this.ctx = canvas.getContext("2d");
  this.dragging=true;
  this.ctx.beginPath();
  this.ctx.moveTo(e.offsetX,e.offsetY)
  console.log("je commence à dessiner")


};



putPoint(e){
  document.getElementById("Valider")
  let boutonReserver = document.getElementById("deuxiemeBoutonReserver")
  if(this.dragging){
  
    this.ctx.lineTo(e.offsetX,e.offsetY);
    this.ctx.stroke();
    boutonReserver.style.display="block"

  }

  console.log("je dessinnee tranquillement")
};

  //POUR COMMENCER
 

//POUR ARRETER 
 disengage (e){
  this.dragging=false;
  this.ctx.closePath();



 
  

  console.log("j'aii fini de dessiner")
 }

 reset (){

  let x = document.getElementById("reservationValide")
  this.canvas = document.getElementById("canvas");
  this.ctx = canvas.getContext("2d");
   this.dragging = false;
   this.ctx.clearRect(0,0,canvas.width,canvas.height)
   let boutonReserver = document.getElementById("deuxiemeBoutonReserver")
    boutonReserver.style.display="none"
    x.style.display="none"
 }






}






