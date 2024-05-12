const express = require("express");
const dotenv = require("dotenv");
const redisService = require("./service/redis.service");
const router = require("./router/index.router");
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
	res.send("Hello world !");
});
app.use("/api", router);

app.listen(port, () => {
	console.log(`Server running on port  ${port}`);
});
