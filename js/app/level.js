function Level ()
{
	var _self = this,
		_el,
		_width,
		_height;

	_self.init = function (levelEl)
	{
		_el = levelEl;

		var computedStyle = window.getComputedStyle (_el);

		// set _width/_height variables by getting the CSS width and height.
		_width = parseInt(computedStyle.width);
		_height = parseInt(computedStyle.height);
	};

	// a function for the retreival of level dimensions.
	_self.getDimensions = function ()
	{
		return {width: _width, height: _height};
	};
}