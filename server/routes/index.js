const Router = require("express");
const router = new Router();
const tableRouter = require("./tableRouter");

router.use("/data", tableRouter);

module.exports = router;
