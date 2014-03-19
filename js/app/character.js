function Character ()
{
	var _self = this;

	_self.el;

	_self.init = function (characterEl)
	{
		_self.el = characterEl;
	};

	_self.move = function (targetPoint)
	{
		_self.el.style.left = targetPoint.x + "px";
		_self.el.style.top = targetPoint.y + "px";
	};
}