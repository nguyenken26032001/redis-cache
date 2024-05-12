const redisService = require("../service/redis.service");
const keyRedis = require("../helper/keyRedis");
async function handleRedisCache(req, res, next) {
	const method = req.method;
	if (method !== "GET") {
		next();
		return;
	}
	const key = keyRedis(req);
	console.log("key", key);
	const dataRedis = await redisService.get(key);
	if (dataRedis !== null) {
		res.json(JSON.parse(dataRedis));
		console.log("get data from redis");
	} else {
		next();
	}
}
module.exports = handleRedisCache;
