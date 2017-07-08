/*
* @Author: Gilles Coomans
*/

/**
 *********** VIMEO
 */
const utils = require('./utils');

const vimeoIdRegExp = /video\/|http(?:s)?:\/\/vimeo\.com\//;
function getVimeoID(url) {
	return url.split(vimeoIdRegExp)[1].split(/[?&]/)[0];
}

const detectVimeoRegExp = /(?:http(?:s)?:)?\/\/(player.)?vimeo\.com/ ;
function detectVimeo(url) {
	return url.match(detectVimeoRegExp);
}

function embed(url, opts) {
	const id = getVimeoID(url),
		query = (opts.query && utils.serializeQuery(opts.query)) || '',
		attr = Object.assign({ frameborder:0 }, opts.attr),
		props = ['webkitallowfullscreen','mozallowfullscreen', 'allowfullscreen'];
	return {
		src: '//player.vimeo.com/video/' + id + query,
		id,
		query,
		attr,
		props,
		videoHTML:'<iframe src="//player.vimeo.com/video/' + id + query + '"' + utils.parseAttributes(attr) + ' ' + props.join(' ') + '></iframe>'
	};
}

module.exports = {
	embed,
	detect: detectVimeo
};

