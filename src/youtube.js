/**
 *********** YOUTUBE
 */

const utils = require('./utils');

const youtubeIDRegExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

function getYoutubeID(url) {
	const r = url.match(youtubeIDRegExp);
	return r && r[1];
}

const detectYoutubeRegExp = /(?:http(?:s)?:)?\/\/(?:www\.)?youtube|youtu\.be/;

function detectYoutube(url) {
	return url.match(detectYoutubeRegExp) && true;
}

const validYouTubeOpts = ['default', 'mqdefault', 'hqdefault', 'sddefault', 'maxresdefault'];

function youtubeImage(id, opts) {
	const image = validYouTubeOpts.indexOf(opts.image) > 0 ? opts.image : 'default';
	return '//img.youtube.com/vi/' + id + '/' + image + '.jpg';
}

function embed(url, opts) {
	const id = getYoutubeID(url),
		query = (opts.query && utils.serializeQuery(opts.query)) || '',
		attr = Object.assign({ frameborder: 0 }, opts.attr),
		props = ['allowfullscreen'],
		imageSrc = youtubeImage(id, opts);
	return {
		imageSrc,
		src: '//www.youtube.com/embed/' + id + query,
		id,
		query,
		attr,
		props,
		imageHTML: '<img src="' + imageSrc + '"/>',
		videoHTML: '<iframe src="//www.youtube.com/embed/' + id + query + '" ' + utils.parseAttributes(attr) + ' ' + props.join(' ') + '></iframe>'
	};
}

module.exports = {
	embed,
	detect: detectYoutube
};

