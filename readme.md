# DirSwipe

Installation:

	npm install dirswipe

Usage:

FS first example:
Models
Models/User.js
Models/UserPosts.js

FS second example:
helpers
helpers/helper.js
helpers/helper-with-complex-name.js

	var dirswipe = require('dirswipe');

	var ex1 = dirswipe('path/to/Models');
	/*
		{
			user: exports,
			userPost: exports
		}
	*/

	var ex2 = dirswipe('path/to/helpers');
	/*
		{
			helper: exports,
			helperWithComplexName: exports
		}
	*/