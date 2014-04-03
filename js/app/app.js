
// the size of a boundary that we minus from our
// collision calculations below.
var BOUNDARY_OFFSET = 40;

// the delay (in milliseconds) between repeated calls of
// the 'tick' function.
var TICK_DELAY = 20;

// create a new instance of the 'Character' class and
// pass in an HTML element for it to manipulate.
var _character = new Character ();
_character.init (document.getElementById("hero"));

// create a new instance of the 'KeyboardInteraction' class so that
// we can check which keys are being pressed.
var _keyboard = new KeyboardInteraction ();
_keyboard.init ();

// create a new instance of the 'Level' class so that our
// game has some boudaries.
var _level = new Level ();
_level.init (document.getElementById("level-container"));


// set an interval for constantly calling the 'tick' function.
// here, we are calling it every 4 milliseconds.
var _ticker = setInterval(tick, TICK_DELAY);


function tick ()
{
	// if there are no keys pressed then return immedietly to
	// stop processing the rest of the 'tick' function.
	if (_keyboard.totalKeysDown === 0) return;

	// if the 'left' key is pressed down...
	if (_keyboard.keys.left.isKeyDown === true)
	{
		// run the character's 'moveLeft' function.
		_character.moveLeft ();
	}

	// if the 'up' key is pressed down...
	if (_keyboard.keys.up.isKeyDown === true)
	{
		// run the character's 'moveUp' function.
		_character.moveUp ();
	}

	// if the 'right' key is pressed down...
	if (_keyboard.keys.right.isKeyDown === true)
	{
		// run the character's 'moveRight' function.
		_character.moveRight ();
	}

	// if the 'down' key is pressed down...
	if (_keyboard.keys.down.isKeyDown === true)
	{
		// run the character's 'moveDown' function.
		_character.moveDown ();
	}

	var characterPosition = _character.getPosition (),
		characterDimensions = _character.getDimensions (),
		levelDimensions = _level.getDimensions ();
	
	if (characterPosition.x + characterDimensions.width >= levelDimensions.width - BOUNDARY_OFFSET)
	{
		console.log ("out of bounds - right");

		collision ();
	}
	else if (characterPosition.x <= BOUNDARY_OFFSET)
	{
		console.log ("out of bounds - left");

		collision ();
	}

	if (characterPosition.y + characterDimensions.height >= levelDimensions.height - BOUNDARY_OFFSET)
	{
		console.log ("out of bounds - bottom");

		collision ();
	}
	else if (characterPosition.y <= BOUNDARY_OFFSET)
	{
		console.log ("out of bounds - top");

		collision ();
	}
}

function collision ()
{
	// clear the interval to stop the tick function being called.
	clearInterval(_ticker);

	// set the 'collision' CSS class on the character to start flames animation.
	_character.getElement().className = "collision";
}