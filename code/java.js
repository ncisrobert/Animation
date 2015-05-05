var divNames = ["Name", "Background", "Character", "Movement", "Fall", "Fall2", "Extras", "UserName"];



var Name;
var Background;
var Character;
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
    
