const express = require("express");

const router = express.Router();

const userController = require("../../controller/user.controller");
const handleRedisCache = require("../../middleware/redis.middleware");

// * case: endpoint cache data with redis
router.get(
	"/",
	(req, res, next) => {
		req.cache = true;
		handleRedisCache(req, res, next);
	},
	userController.getUser
);
// * case: endpoint without cache data
router.post("/", userController.addUser);

module.exports = router;
