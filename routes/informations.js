const express = require("express");
const router = express.Router();

const infocontroller = require("../controller/informations");

router.get("/", infocontroller.getAll);
router.put("/:id", infocontroller.update);

module.exports = router;
