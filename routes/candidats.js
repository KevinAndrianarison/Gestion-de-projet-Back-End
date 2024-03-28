const express = require("express");
const router = express.Router();

const candidatsController = require("../controller/candidats");

router.get("/:id", candidatsController.getById);
router.post("/", candidatsController.create);

module.exports = router;
