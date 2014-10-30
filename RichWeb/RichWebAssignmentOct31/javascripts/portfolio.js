/**
 * 
 */

// Functionsthat will allow me to display my interests in seperate divs that
// will be "on top" of each other
// function takes in a value
function displayDiv(id) {
	// places the values inside a variable
	var divElement = document.getElementById(id);

	// if the display is inline then make them go away otherwise display them
	// inline
	if (divElement.style.display == 'inline')
		divElement.style.display = 'none';
	else
		divElement.style.display = 'inline';
}
