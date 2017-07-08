/*
* @Author: Gilles Coomans
*/

// const utils = require('./utils');

/**
 *********** SOUNDCLOUD
 */

function getSoundcloudInfos(url) {
	const scurl = decodeURI(url.split(/value="/)[1].split(/["]/)[0]);
	return {
		url: scurl,
		id: scurl.split(/tracks\//)[1].split(/[&"]/)[0]
	};
}

const detectSoundCloudRegExp = /(?:http(?:s)?:)?\/\/player\.soundcloud\.com/ ;
function detectSoundcloud(url) {
	return url.match(detectSoundCloudRegExp);
}

function embed(url, opts) {
	const infos = getSoundcloudInfos(url, opts);
	infos;
	// @Todo Still to be done
}

module.exports = {
	embed,
	detect: detectSoundcloud
};
