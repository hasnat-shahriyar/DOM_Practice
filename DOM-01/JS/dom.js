const sections = document.querySelectorAll ("section");

for (const section of sections){
    section.style.color = "tomato";
    section.style.border = "1px solid tomato";
    section.style.width = "500px";
    section.style.textAlign = "center";
    section.style.backgroundColor = "#030345";

}

let li = document.createElement("li");
li.innerText = "Mango";

