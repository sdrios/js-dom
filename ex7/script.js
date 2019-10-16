// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

var header = document.getElementById('section-header')
var section = document.getElementById('section')
let displayingSection=true

header.addEventListener('click',function(){
   if(displayingSection) {
     section.style.display="none";
     displayingSection=false
    }
    else if(!displayingSection){
    section.style.display="block";
    displayingSection=true
    }
});