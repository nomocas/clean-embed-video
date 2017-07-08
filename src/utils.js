
/**
 *********** MISC
 */

function serializeQuery(query) {
	const queryString = [];
	for (const p in query)
		queryString.push(encodeURIComponent(p) + "=" + encodeURIComponent(query[p]));
	return '?' + queryString.join("&");
}
function parseAttributes (attr) {
	return (attr &&  Object.keys(attr).map((key) => {
		return key + '="' + attr[key] + '"';
	}).join(' ')) || '';
}

module.exports = {
	serializeQuery,
	parseAttributes
};
