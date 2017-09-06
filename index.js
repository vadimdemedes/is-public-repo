'use strict';

const got = require('got');

module.exports = url => {
	if (!url.startsWith('http')) {
		url = `https://github.com/${url}`;
	}

	return got(url)
		.then(() => true)
		.catch(() => false);
};
