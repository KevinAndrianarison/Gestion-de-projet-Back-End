const express = require("express");
const router = express.Router();

const logincontroller = require("../controller/login");

router.post("/", logincontroller.verifylogin);
module.exports = router;
