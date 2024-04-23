const express = require("express");
const router = express.Router();

const profilcontroller = require("../controller/profil");

router.get("/", profilcontroller.getProfil);
router.put("/:id", profilcontroller.update);



module.exports = router;
