/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

var addtask = document.getElementById("add-button")

addtask.addEventListener('click',function(){
    //create li element
    let toDoLineItemElement = document.createElement("li");

    //create delete button element

    //create done button element

    //make text editable
    let todoText = document.getElementById("description").value;
    let todoParagraph = document.createElement("p");
    todoParagraph.innerHTML = todoText; 
    todoParagraph.contentEditable = true;
    
    //add <p> element to parent <li> element
    toDoLineItemElement.appendChild(todoParagraph);

    //add <li> element to parent <ul> element
    document.getElementById("todo-list").appendChild(toDoLineItemElement);

})