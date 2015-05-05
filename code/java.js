var divNames = ["Name", "Background", "Character", "Movement", "Fall", "Fall2", "Extras", "UserName"];

var Name;
var Background;
var Character;
var Movement;
var Movement;
var Fall;
var Fall2;
var Extras;
var UserName;

function setup() {
    alert("im working");
     
    for (i = 0; i <divNames.length; i++) { 
        
    document.getElementById(divNames[i]).style.display = "none";
    document.getElementById("Name").style.display = "block";    
        
    }
}

var counter = 0 ;

function Next() {
    
    document.getElementById(divNames[counter]).style.display = "none";
    
    counter = counter +1;
    
    document.getElementById(divNames[counter]).style.display = "block";
    }

function submit() {
  
    Name =  document.getElementById("name").value;
    Background = document.getElementById("background").value; 
    Charicter = document.getElementById("charicter").value; 
    Movement = document.getElementById("movement").value; 
    Fall = document.getElementById("fall").value; 
    Fall2 = document.getElementById("fall2").value;
    Extras = document.getElementById("extras").value; 
    UserName = document.getElementById("username").value; 
    
    alert(Name + Background + Charicter+ Movement + Fall + Fall2 + Extras + UserName )
}
    
