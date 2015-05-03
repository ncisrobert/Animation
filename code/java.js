var divNames = ["Background", "Character", "Movement", "Fall", "Fall2", "Extras", "UserName"];

function setup() {
    alert("im working");
     
    for (i = 0; i <divNames.length; i++) { 
        
    document.getElementById(divNames[i]).style.display = "none";
        
    }
}

var counter = 0 ;

function Next() {
    
    document.getElementById("Name").style.display ="none";
    document.getElementById(divNames[counter]).style.display ="none";
    counter = counter + 1;
    document.getElementById(divNames[counter]).style.display ="block";
        
    if (counter == 6) {
        
         document.getElementById("Next").style.display ="none";
          document.getElementById("Submit").style.display ="Block";
    }
    }
    
    
