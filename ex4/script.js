// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"


var button = document.getElementById("myButton");
var elements = document.getElementsByClassName("box")


button.addEventListener('click', function(){
   for (i=0; i <elements.length; i++){
    var element = elements[i]
    element.style.background="blue"
    
   }
})