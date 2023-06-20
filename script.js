function myColor() {

	// Get the value of red color
	var red = document.getElementById('red').value;

	// Get the value of green color
	var green = document.getElementById('green').value;

	// Get the value of blue color
	var blue = document.getElementById('blue').value;

	// rgb() function is used to create the color
	// from red, green and blue values
	var color = 'rgb(' + red + ',' + green + ',' + blue + ')';

	// Change background color with the
	// color obtained by rgb function
	document.body.style.backgroundColor = color;

	// Set the obtained rgb() color code in the
	// input text field having id=box
	document.getElementById('box').value = color;

}

// On changing red range slider myColor()
// function is called
document.getElementById('red')
	.addEventListener('input', myColor);

// On changing green range slider myColor()
// function is called
document.getElementById('green')
	.addEventListener('input', myColor);

// On changing blue range slider myColor()
// function is called
document.getElementById('blue')
	.addEventListener('input', myColor);
