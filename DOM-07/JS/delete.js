document.getElementById ("delete-confirm").addEventListener("keyup", function (event){
    const text = event.target.value;
    const deleteButton = document.getElementById ("delete-button");
    if (text === "delete"){
        deleteButton.removeAttribute ("disabled");
    } else {
        deleteButton.setAttribute ("disabled", true);
    }
})
document.getElementById ("delete-button").addEventListener("click", function(){
    const infoDelete = document.getElementById("info");
    infoDelete.style.display = "none";
})