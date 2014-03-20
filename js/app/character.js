function Character ()
{
	var _self = this,
		_x = 0,
		_y = 0,
		_movementDistance = 4;

	_self.el;

	_self.init = function (characterEl)
	{
		_self.el = characterEl;
	};

	_self.moveLeft = function ()
	{
		_self.el.style.left = _x - _movementDistance + "px";
		
		_x -= _movementDistance;

		console.log ('character moving left');
	};

	_self.moveUp = function ()
	{
		_self.el.style.top = _y - _movementDistance + "px";
		
		_y -= _movementDistance;

		console.log ('character moving up');
	};

	_self.moveRight = function ()
	{
		_self.el.style.left = _x + _movementDistance + "px";

		_x += _movementDistance;

		console.log ('character moving right');
	};

	_self.moveDown = function ()
	{
		_self.el.style.top = _y + _movementDistance + "px";
		
		_y += _movementDistance;

		console.log ('character moving down');
	};
}