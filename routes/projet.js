const express = require("express");
const router = express.Router();

const projetcontroller = require("../controller/projet");

router.post("/", projetcontroller.postProjet);
router.get("/", projetcontroller.getAll);
router.post("/:idProjets", projetcontroller.delete);



module.exports = router;
