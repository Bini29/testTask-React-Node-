const Router = require("express");
const router = new Router();
const tableController = require("../controller/tableController");

router.get("/", tableController.getAll);
router.post("/create", tableController.create);
module.exports = router;
