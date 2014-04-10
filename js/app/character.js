function Character ()
{
	var _self = this,
		_x,
		_y,
		_width,
		_height,
		_movementDistance = 4,
		_el;

	function setCharacterClassName (className)
	{
		if (_el.className !== className)
		{
			_el.className = className;
		}
	}

	// the 'init' function expects an HTML element as a parameter
	_self.init = function (characterEl)
	{
		// set the variable for the character element to reference
		// the HTML element that is passed in as a parameter.
		_el = characterEl;
		var computedStyle = window.getComputedStyle (_el);

		_x = parseInt(computedStyle.left);
		_y = parseInt(computedStyle.top);
		_width = parseInt(computedStyle.width);
		_height = parseInt(computedStyle.height);
	};

	_self.moveLeft = function ()
	{
		setCharacterClassName("left");

		// we decrease the value of our '_x' variable by the value of our '_movementDistance' variable.
		_x -= _movementDistance;

		// we then update the CSS 'left' of the stored HTML element.
		// basically, we are telling it to move to the value of our '_x' variable.
		// 'px' is added on the end because this is required by the CSS.
		_el.style.left = _x + "px";
		

		// console.log ('character moving left');
	};

	_self.moveUp = function ()
	{
		setCharacterClassName("up");

		// we decrease the value of our '_y' variable by the value of our '_movementDistance' variable.
		_y -= _movementDistance;

		// we then update the CSS 'top' of the stored HTML element.
		// basically, we are telling it to move to the value of our '_y' variable.
		// 'px' is added on the end because this is required by the CSS.
		_el.style.top = _y + "px";
		

		// console.log ('character moving up');
	};

	_self.moveRight = function ()
	{
		setCharacterClassName("right");

		// we increase the value of our '_x' variable by the value of our '_movementDistance' variable.
		_x += _movementDistance;

		// we then update the CSS 'left' of the stored HTML element.
		// basically, we are telling it to move to the value of our '_x' variable.
		// 'px' is added on the end because this is required by the CSS.
		_el.style.left = _x + "px";


		// console.log ('character moving right');
	};

	_self.moveDown = function ()
	{
		setCharacterClassName("down");

		// we increase the value of our '_y' variable by the value of our '_movementDistance' variable.
		_y += _movementDistance;

		// we then update the CSS 'top' of the stored HTML element.
		// basically, we are telling it to move to the value of our '_y' variable.
		// 'px' is added on the end because this is required by the CSS.
		_el.style.top = _y + "px";
		

		// console.log ('character moving down');
	};

	_self.standStill = function ()
	{
		setCharacterClassName("");
	};

	// a function for the retreival of the current left/top position.
	_self.getPosition = function ()
	{
		return {x: _x, y: _y};
	};

	// a function for the retreival of character dimensions.
	_self.getDimensions = function ()
	{
		return {width: _width, height: _height};
	};

	// a function for the retreival of character HTML element.
	_self.getElement = function ()
	{
		return _el;
	};
}