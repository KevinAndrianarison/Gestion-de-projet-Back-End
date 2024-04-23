const express = require("express");
const router = express.Router();

const carteController = require("../controller/carte");

router.post("/", carteController.postCarte);
router.delete("/:idCarte", carteController.delete);



module.exports = router;
