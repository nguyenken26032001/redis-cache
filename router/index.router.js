const express = require("express");
const router = express.Router();
const userRouter = require("./apiRouter/userRouter");

router.use("/user", userRouter);
module.exports = router;
