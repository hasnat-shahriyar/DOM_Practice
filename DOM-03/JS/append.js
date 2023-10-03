// Step 1: Where to add
const sectionOne = document.querySelector(".section_One"); // Use querySelector to select the class

const divisionList = document.getElementById("division");

// Step 2: What to be added
const h1 = document.createElement("h1");
h1.innerText = "Northern Bangladesh";

// Insert "Northern Bangladesh" at the top of the section
sectionOne.insertBefore(h1, divisionList);

const li = document.createElement("li");
li.innerText = "Sylhet";

// Step 3: Add the Child
divisionList.appendChild(li);


/*----------------------------*/
// Step 1: Where to add
const parentContainer = document.getElementById("parent");

// Step 2: What to be added
const section = document.createElement("section");
const h1Southern = document.createElement("h1"); // Rename h1 to h1Southern
h1Southern.innerText = "Southern Bangladesh";
section.appendChild(h1Southern); // Use h1Southern instead of h1

const ul = document.createElement("ul");

const liOne = document.createElement("li");
liOne.innerText = "Khulna";
ul.appendChild(liOne);

const liTwo = document.createElement("li");
liTwo.innerText = "Barisal";
ul.appendChild(liTwo);

const liThree = document.createElement("li");
liThree.innerText = "Dhaka";
ul.appendChild(liThree);

const liFour = document.createElement("li");
liFour.innerText = "Chittagong";
ul.appendChild(liFour);

section.appendChild(ul);
parentContainer.appendChild(section);


// Set Inner HTML directly
const sectionThree = document.createElement ("section");
sectionThree.innerHTML = `
<h1> New Divisions in List </h1>
<ul>
    <li> Padma </li>
    <li> Meghna </li>
</ul>
`
parentContainer.appendChild (sectionThree);