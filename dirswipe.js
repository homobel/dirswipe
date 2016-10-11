
var fs = require('fs'),
	util = require('util');

function swipe(dir) {

	var exports = {};

	if (fs.existsSync(dir)) {

		fs.readdirSync(dir).forEach(function(file) {
			if (file === 'index.js') {
				return require(dir);
			}
			if (file.match(/.+(?:\.json|\.js)$/) === null) {
				return;
			}

			var name = file.replace(/(?:\.json|\.js)$/, '');

			if (name.indexOf('-') !== -1) {
				name = name.toLowerCase().replace(/-\D/g, function(match) {
					return match.charAt(1).toUpperCase();
				});
			}
			else {
				name = name.replace(name[0], name[0].toLowerCase());
			}

			exports[name] = require(dir + '/' + file);

		});

	}

	return exports;

}

module.exports = swipe;
