var ticker = setInterval(tick, 4);


var _character1 = new Character ();
_character1.init (document.getElementById("hero"));

var _keyboard = new KeyboardInteraction ();
_keyboard.init ();
_keyboard.interactionCallbackFunction = _character1.move;


//var _level = new Level ();


function tick ()
{
	_keyboard.checkKeys ();
}