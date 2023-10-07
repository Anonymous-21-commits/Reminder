const create = require("../../controllers/mailController");
const router = require("express").Router();
router.post("/create", create);
module.exports = router;
