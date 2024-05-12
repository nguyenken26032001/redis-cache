const axios = require("axios");
const keyRedis = require("../helper/keyRedis");
const redisService = require("../service/redis.service");

const baseUrl = "https://jsonplaceholder.typicode.com/users";

class userController {
	async getUser(req, res, next) {
		try {
			const { data } = await axios.get(baseUrl);
			const key = keyRedis(req);
			res.json(data);
			await redisService.set(key, JSON.stringify(data));
			console.log("get data from api");
		} catch (error) {
			next(error);
		}
	}
	async addUser(req, res, next) {}
}

module.exports = new userController();
