// Function to add item to local storage
const addToLocalStorage = () => {
  let InputNumberItem = document.getElementById("key_number");
  let InputNumber = InputNumberItem.value;

  let inputItem = document.getElementById("input_area");
  let inputText = inputItem.value;

  localStorage.setItem(InputNumber, inputText);
};

// Function to remove item from local storage
const removeFromLocalStorage = () => {
  let InputNumberItem = document.getElementById("key_number");
  let InputNumber = InputNumberItem.value;

  localStorage.removeItem(InputNumber);
};

// Add event listeners after defining functions
document
  .getElementById("add_button")
  .addEventListener("click", addToLocalStorage);
document
  .getElementById("remove_button")
  .addEventListener("click", removeFromLocalStorage);
