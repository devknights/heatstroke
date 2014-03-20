var _character = new Character ();
_character.init (document.getElementById("hero"));

var _keyboard = new KeyboardInteraction ();
_keyboard.init ();

//var _level = new Level ();

var ticker = setInterval(tick, 4);


function tick ()
{
	if (_keyboard.keys.left.isKeyDown === true)
	{
		_character.moveLeft ();
	}

	if (_keyboard.keys.up.isKeyDown === true)
	{
		_character.moveUp ();
	}

	if (_keyboard.keys.right.isKeyDown === true)
	{
		_character.moveRight ();
	}

	if (_keyboard.keys.down.isKeyDown === true)
	{
		_character.moveDown ();
	}
}
