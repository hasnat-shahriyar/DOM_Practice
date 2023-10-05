// Option 3
const makeTomatoButton = document.getElementById ("make-tomato");
makeTomatoButton.onclick = makeTomato;

function makeTomato (){
    document.body.style.backgroundColor = "tomato";
}

// Option 4
const cyanButton = document.getElementById ("make-cyan");
cyanButton.onclick = makeCyan;

function makeCyan (){
    document.body.style.backgroundColor = "darkcyan";
}

// Option 4 V2
const greenButton = document.getElementById ("make-green");
greenButton.addEventListener ("click", function makeGreen(){
    document.body.style.backgroundColor = "yellowgreen";
})

// Option 4 V3 | Final
document.getElementById ("make-goldenrod").addEventListener ("click", function(){
    document.body.style.backgroundColor = "goldenrod";
})