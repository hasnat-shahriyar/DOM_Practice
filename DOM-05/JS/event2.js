// Option 1
function handleClick (){
    const handlerStatus = document.getElementById ("handler-status");
    handlerStatus.innerText = "Handled by Function Attached on OnClick Attribute!"
}
// Option 2
document.getElementById ("event-listener").addEventListener ("click", function(){
    const handlerStatus = document.getElementById ("handler-status");
    handlerStatus.innerText = "Text is updated by addEventListener Button"
})

// Option 3
document.getElementById ("btn-update").addEventListener ("click", function(){
    const inputField = document.getElementById ("input-field");
    const inputText = inputField.value;
    const paragraph = document.getElementById ("input-text");
    paragraph.innerText = inputText;
    inputField.value = "";
})