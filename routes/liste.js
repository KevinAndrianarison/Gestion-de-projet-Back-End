const express = require("express");
const router = express.Router();

const listeController = require("../controller/liste");

router.post("/", listeController.postListe);
router.delete("/:idListe", listeController.delete);



module.exports = router;
