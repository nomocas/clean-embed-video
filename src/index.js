// inspired from :
// http://stackoverflow.com/questions/3452546/javascript-regex-how-do-i-get-the-youtube-video-id-from-a-url
// and https://npmjs.org/package/embed-video

const vimeo = require('./vimeo'),
	youtube = require('./youtube'),
	soundcloud = require('./soundcloud');

module.exports = function(url, opts) {
	opts = opts || {};
	return (vimeo.detect(url) && vimeo.embed(url, opts)) || (youtube.detect(url) && youtube.embed(url, opts)) || (soundcloud.detect(url) && soundcloud.embed(url, opts)) || false;
};

