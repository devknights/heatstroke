var ticker = setInterval(tick, 4);


var _character = new Character ();
_character.init (document.getElementById("hero"));

var _keyboard = new KeyboardInteraction ();
_keyboard.init ();
_keyboard.interactionCallbackFunction = _character.move;


//var _level = new Level ();


function tick ()
{
	_keyboard.checkKeys ();
}