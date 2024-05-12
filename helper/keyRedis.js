module.exports = function keyRedis(req) {
	let key = "";
	const baseUrl = req.baseUrl;
	const query = req.query;
	if (Object.keys(query).length) {
		for (const [, value] of Object.entries(query)) {
			key += value.replace(/ /g, "").trim();
		}
	} else {
		key = baseUrl.replace(/\//g, "");
	}
	return key;
};
