function Character ()
{
	var _self = this,
		x = 0,
		y = 0;

	_self.el;

	_self.init = function (characterEl)
	{
		_self.el = characterEl;
	};

	_self.move = function (movementObject)
	{
		if (movementObject.axis === "x")
		{
			if (movementObject.direction === 1)
			{
				_self.el.style.left = x + movementObject.distance + "px";
				x += movementObject.distance;
			}
			else
			{
				_self.el.style.left = x - movementObject.distance + "px";
				x -= movementObject.distance;
			}

			console.log ("x:", x);
		}
		else
		{
			if (movementObject.direction === 1)
			{
				_self.el.style.top = y + movementObject.distance + "px";
				y += movementObject.distance;
			}
			else
			{
				_self.el.style.top = y - movementObject.distance + "px";
				y -= movementObject.distance;
			}

			console.log ("y:", y);
		}
	};
}