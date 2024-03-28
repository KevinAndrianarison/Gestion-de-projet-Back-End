const express = require("express");
const router = express.Router();

const AUcontroller = require("../controller/AU");

router.get("/", AUcontroller.getAll);
router.post("/", AUcontroller.create);
router.delete("/:id", AUcontroller.delete);

module.exports = router;
