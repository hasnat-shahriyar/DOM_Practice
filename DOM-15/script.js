const Sum = () => {
  // Value of Input A
  let a = document.getElementById("input_a");
  let aTextString = a.value;
  let aValue = parseInt(aTextString);
  a.value = "";

  // Value of Input B
  let b = document.getElementById("input_b");
  let bValue = parseInt(b.value);
  b.value = "";

  // Sum of Value A + B
  let sum = aValue + bValue;

  // Displaying the Result : Version 1
  let display = document.getElementById("display");
  display.innerHTML = `Result : ${sum}`;

  // Displaying the Result : Version 2
  let div = document.getElementById("main");
  let p = document.createElement("p");
  p.innerHTML = `Sum : ${sum}`;
  div.appendChild(p);

  // Checking Do While Method
  do {
    let div = document.getElementById("main");
    let p = document.createElement("p");
    p.innerHTML = `Do While Loop Value : ${aValue}`;
    div.appendChild(p);
    aValue = aValue + 1;
  } while (aValue <= bValue);
};
