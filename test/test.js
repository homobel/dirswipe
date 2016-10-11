
var dirswipe = require('../dirswipe');

var js = dirswipe(__dirname + '/js');
var json = dirswipe(__dirname + '/json');
var mixed = dirswipe(__dirname + '/mixed');
var wtf = dirswipe(__dirname + '/wtf');

function check(obj, prop, value) {
	if (value.value) {
		console.assert(prop === value.value, 'invalid prop: ' + prop + ' ' + JSON.stringify(obj));
	}
	else {
		console.assert(prop === value, 'invalid prop: ' + prop + ' ' + JSON.stringify(obj));
	}
}

function forEach(obj) {
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			check(obj, prop, obj[prop]);
		}
	}
}

forEach(js);
forEach(json);
forEach(mixed);
forEach(wtf);
