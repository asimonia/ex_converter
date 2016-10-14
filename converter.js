function toCelsius () {

}

function toFahrenheit () {

}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var button2 = document.getElementById("clear");

var qinput = document.getElementById("qinput");

// This function should determine which conversion should
// happen based on which radio button is selected.

function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

function clearInput () {
	qinput.value = "";
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
button2.addEventListener("click", clearInput);