
// Selecting the elements you want and storing them by caching them with var
var button = document.getElementById("enter"); // Selects the enter ID
var input = document.getElementById("userinput"); // Selects the userinput ID
var ul = document.querySelector("ul"); // Selects the ul 
var listItems=document.getElementsByTagName("li")

// Refactoring the code to make is not repeat as much\
// Use inputLength to replace input.value.length in each event
function inputLength() {
    return input.value.length;
}

// Use createListElement to replace the repeated code
function createListElement(){
    // Adds new item to list
    var li = document.createElement("li"); // creates a new li
    li.appendChild(document.createTextNode(input.value)); // Adds the new li with the text entered
    ul.appendChild(li); // Adds that new li to the ul in the index.html
    input.value = "";

    // Adds delete button next to item on list
    var btn = document.createElement("button"); // creates a button next to the li text
    btn.appendChild(document.createTextNode("Delete!")); // What the button says
    li.appendChild(btn);
    btn.onclick = removeParent;
}

// Use addListAfterClick to replace click function
function addListAfterClick() {
    if (inputLength() > 0) {
      createListElement();
    }
}

// Use addListAfterKeypress to replace key press function
function addListAfterKeypress(event) { // Make sure you have an EVENT in ()
    if (inputLength() > 0 && event.keyCode === 13) { // Uses the ENTER Button to add below input
      createListElement();
    }
}

// If anyone ever clicks run this function
button.addEventListener("click", addListAfterClick)
// if anyone ever keypresses run this function
input.addEventListener("keypress", addListAfterKeypress);

// Not sure what this does??
ul.onclick=function(event) {
    var target=event.target;
    target.classList.toggle("done");
}

// Grabs the length of each listed item currently on there.
function listLength() {
    return listItems.length;
}

// Adds DELETE button to all current list items
function deleteButton() {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    listItems[i].appendChild(btn);
    btn.onclick=removeParent;
}

for(i=0; i<listLength(); i++){
    deleteButton();
}

// Removes the list item and button
function removeParent(evt) {
    evt.target.parentNode.remove();
}