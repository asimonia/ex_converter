function toCelsius (fahrenheit) {
	var celsius = (fahrenheit - 32) * (5 / 9);
	return celsius;
}

function toFahrenheit (celsius) {
	var fahrenheit = (celsius * 1.8) + 32;
	return fahrenheit;
}

// Get a reference to the elements in the DOM
var button = document.getElementById("converter");
var button2 = document.getElementById("clear");
var qinput = document.getElementById("qinput");
var converted = document.getElementById("converted");

// This function should determine which conversion should
// happen based on which radio button is selected.

function determineConverter (clickEvent) {
	if (document.getElementById("fahrenheit").checked) {
		var temp = toCelsius(qinput.value);

		if (temp > 32) {
			converted.className = "red";
		} else if (temp < 0) {
			converted.className = "blue";
		} else {
			converted.className = "green";
		}
		converted.innerHTML = "From <b>" + qinput.value + "</b> degrees fahrenheit to <b>" + temp + "</b> degrees celsius." + "</b>";
	} else if (document.getElementById("celsius").checked) {
		var temp = toFahrenheit(qinput.value);
		converted.innerHTML = "From <b>" + qinput.value + "</b> degrees celsius to <b>" + temp + "</b> degrees fahrenheit." + "</b>";

		if (temp > 90) {
			converted.className = "red";
		} else if (temp < 32) {
			converted.className = "blue";
		} else {
			converted.className = "green";
		}
	}
}

function clearInput () {
	// Clear all inputs
	qinput.value = "";
	converted.innerHTML = "";
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
button2.addEventListener("click", clearInput);

// Event handler to the input field that checks for the enter key.
// If press then perform conversion
qinput.addEventListener("keydown", function(event) {
	event.preventDefault();
	if (event.keyCode == 13) {
		button.click();
	}
});