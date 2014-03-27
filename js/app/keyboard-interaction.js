function KeyboardInteraction ()
{
	var _self = this;

	_self.keys = {
		left: {code: 37, isKeyDown: false},
		up: {code: 38, isKeyDown: false},
		right: {code: 39, isKeyDown: false},
		down: {code: 40, isKeyDown: false}
	};

	_self.init = function ()
	{
		window.addEventListener ('keydown', keyDownHandler, false);
		window.addEventListener ('keyup', keyUpHandler, false);
	};

	function keyDownHandler (event)
	{
		//console.log ("keyDownHandler... keyCode:", event.keyCode);

		switch (event.keyCode)
		{
			case _self.keys.left.code :
				_self.keys.left.isKeyDown = true;
				break;
			case _self.keys.up.code :
				_self.keys.up.isKeyDown = true;
				break;
			case _self.keys.right.code :
				_self.keys.right.isKeyDown = true;
				break;
			case _self.keys.down.code :
				_self.keys.down.isKeyDown = true;
				break;
		}
	}

	function keyUpHandler (event)
	{
		switch (event.keyCode)
		{
			case _self.keys.left.code :
				_self.keys.left.isKeyDown = false;
				break;
			case _self.keys.up.code :
				_self.keys.up.isKeyDown = false;
				break;
			case _self.keys.right.code :
				_self.keys.right.isKeyDown = false;
				break;
			case _self.keys.down.code :
				_self.keys.down.isKeyDown = false;
				break;
		}
	}
}