
var fs = require('fs'),
	util = require('util');

function swipe(dir, args) {

	var exports = {};

	if (fs.existsSync(dir)) {

		fs.readdirSync(dir).forEach(function(file) {
			if (file === 'index.js') return;
			if (file.match(/.+\.js/g) === null) return;

			var name = file.replace('.js', '').toLowerCase().replace(/-\D/g, function(match) {
					return match.charAt(1).toUpperCase();
				});

			exports[name] = require(dir + '/' + file);

			if (util.isArray(args)) {
				exports[name].apply(null, args);
			}

		});

	}

	return exports;

}

module.exports = swipe;
