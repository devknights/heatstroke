function KeyboardInteraction ()
{
	var _self = this,
		_keys = {
			left: {code: 37, isKeyDown: false},
			up: {code: 38, isKeyDown: false},
			right: {code: 39, isKeyDown: false},
			down: {code: 40, isKeyDown: false}
		},
		_movementDistance = 4;

	_self.interactionCallbackFunction;


	_self.init = function ()
	{
		window.addEventListener ('keydown', keyDownHandler, false);
		window.addEventListener ('keyup', keyUpHandler, false);
	};

	_self.checkKeys = function ()
	{
		if (_keys.left.isKeyDown === true)
		{
			_self.interactionCallbackFunction ({axis: "x", direction: -1, distance: _movementDistance});
		}

		if (_keys.up.isKeyDown === true)
		{
			_self.interactionCallbackFunction ({axis: "y", direction: -1, distance: _movementDistance});
		}

		if (_keys.right.isKeyDown === true)
		{
			_self.interactionCallbackFunction ({axis: "x", direction: 1, distance: _movementDistance});
		}

		if (_keys.down.isKeyDown === true)
		{
			_self.interactionCallbackFunction ({axis: "y", direction: 1, distance: _movementDistance});
		}
	};

	function keyDownHandler (event)
	{
		//console.log ("keyDownHandler... keyCode:", event.keyCode);

		switch (event.keyCode)
		{
			case _keys.left.code :
				_keys.left.isKeyDown = true;
				break;
			case _keys.up.code :
				_keys.up.isKeyDown = true;
				break;
			case _keys.right.code :
				_keys.right.isKeyDown = true;
				break;
			case _keys.down.code :
				_keys.down.isKeyDown = true;
				break;
		}
	}

	function keyUpHandler (event)
	{
		switch (event.keyCode)
		{
			case _keys.left.code :
				_keys.left.isKeyDown = false;
				break;
			case _keys.up.code :
				_keys.up.isKeyDown = false;
				break;
			case _keys.right.code :
				_keys.right.isKeyDown = false;
				break;
			case _keys.down.code :
				_keys.down.isKeyDown = false;
				break;
		}
	}
}