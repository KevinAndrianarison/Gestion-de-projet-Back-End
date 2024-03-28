const pool = require("../Database/index");
const secret = "djcdvdknERVRVKFV55845dje44FGG";
const jwt = require("jsonwebtoken");

const logincontroller = {
  verifylogin: async (req, res) => {
    try {
      const { username, mdp } = req.body;
      let [rows, fields] = await pool.query(
        "SELECT * FROM `admin` WHERE `identifiant_admin` = ? AND `mdp_admin` = ?",
        [username, mdp]
      );
      const myToken = jwt.sign(rows[0], secret);
      res.json(myToken);
    } catch (error) {
      console.log(error);
      res.json({
        status: "error",
      });
    }
  },
};

module.exports = logincontroller;
