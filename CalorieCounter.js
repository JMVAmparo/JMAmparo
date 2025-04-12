// Get reference to the Clear button
const clearButton = document.getElementById("clear-btn");

// Define the clearForm function
function clearForm() {
  // Example logic: clear input fields and checkboxes
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subscribe").checked = false;
  
  console.log("Form cleared!");
}

// Add the event listener to call clearForm when button is clicked
clearButton.addEventListener("click", clearForm);
