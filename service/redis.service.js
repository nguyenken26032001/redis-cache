const redis = require("redis");
const dotenv = require("dotenv");
dotenv.config();
const REDIS_PORT = process.env.REDIS_PORT || 6739;

const redisClient = redis.createClient({
	host: "127.0.1.1",
	port: REDIS_PORT
});
redisClient.connect();
redisClient.on("connect", () => {
	console.log("Redis client connected");
});
redisClient.on("error", (err) => {
	console.log("Error " + err);
});
module.exports = redisClient;
