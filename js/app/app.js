
// create a new instance of the 'Character' class an
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
_level.init (document.getElementById("main-container"));


// set an interval for constantly calling the 'tick' function.
// here, we are calling it every 4 milliseconds.
var _ticker = setInterval(tick, 4);


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
	
	if (characterPosition.x + characterDimensions.width >= levelDimensions.width)
	{
		console.log ("out of bounds - right");

		stopGame ();
	}
	else if (characterPosition.x <= 0)
	{
		console.log ("out of bounds - left");

		stopGame ();
	}

	if (characterPosition.y + characterDimensions.height >= levelDimensions.height)
	{
		console.log ("out of bounds - bottom");

		stopGame ();
	}
	else if (characterPosition.y <= 0)
	{
		console.log ("out of bounds - top");

		stopGame ();
	}
}

function stopGame ()
{
	clearInterval(_ticker);
}