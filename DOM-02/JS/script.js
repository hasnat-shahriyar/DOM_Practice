let button = document.getElementsByTagName ("button")[0];
button.addEventListener ("click", function (){
    console.log ("Yo, It worked!");
} );


let newButton = document.getElementById ("sbmt-btn");
let input = document.getElementById ("user-input");

newButton.addEventListener ("click", function(){
    console.log ("");
    
})

input.addEventListener ("keypress", function (){

})

// Function to add item when Enter key is pressed
function onEnterKeyPress(event) {
    if (event.key === "Enter") {
        addItem();
    }
}

// Function to add item to the list
function addItem() {
    // Get the input value
    var task = document.getElementById("user-input").value;

    // Check if the input is not empty
    if (task.trim() !== "") {
        // Create a new list item
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(task));

        // Add the new list item to the list
        document.getElementById("todoList").appendChild(li);

        // Clear the input field
        document.getElementById("user-input").value = "";
    }
}

// Add event listener to the input field for Enter key press
document.getElementById("user-input").addEventListener("keyup", onEnterKeyPress);