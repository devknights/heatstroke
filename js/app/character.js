function Character ()
{
	var _self = this,
		_x = 0,
		_y = 0,
		_movementDistance = 4;

	_self.el;

	// the 'init' function expects an HTML element as a parameter
	_self.init = function (characterEl)
	{
		// set the variable for the character element to reference
		// the HTML element that is passed in as a parameter.
		_self.el = characterEl;
	};

	_self.moveLeft = function ()
	{
		// we decrease the value of our '_x' variable by the value of our '_movementDistance' variable.
		_x -= _movementDistance;

		// we then update the CSS 'left' of the stored HTML element.
		// basically, we are telling it to move to the value of our '_x' variable.
		// 'px' is added on the end because this is required by the CSS.
		_self.el.style.left = _x + "px";
		

		console.log ('character moving left');
	};

	_self.moveUp = function ()
	{
		// we decrease the value of our '_y' variable by the value of our '_movementDistance' variable.
		_y -= _movementDistance;

		// we then update the CSS 'top' of the stored HTML element.
		// basically, we are telling it to move to the value of our '_y' variable.
		// 'px' is added on the end because this is required by the CSS.
		_self.el.style.top = _y + "px";
		

		console.log ('character moving up');
	};

	_self.moveRight = function ()
	{
		// we increase the value of our '_x' variable by the value of our '_movementDistance' variable.
		_x += _movementDistance;

		// we then update the CSS 'left' of the stored HTML element.
		// basically, we are telling it to move to the value of our '_x' variable.
		// 'px' is added on the end because this is required by the CSS.
		_self.el.style.left = _x + "px";


		console.log ('character moving right');
	};

	_self.moveDown = function ()
	{
		// we increase the value of our '_y' variable by the value of our '_movementDistance' variable.
		_y += _movementDistance;

		// we then update the CSS 'top' of the stored HTML element.
		// basically, we are telling it to move to the value of our '_y' variable.
		// 'px' is added on the end because this is required by the CSS.
		_self.el.style.top = _y + "px";
		

		console.log ('character moving down');
	};
}