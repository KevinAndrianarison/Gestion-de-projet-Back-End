const pool = require("../Database/index");

const AUcontroller = {
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("SELECT * FROM `au`");
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
    }
  },

  create: async (req, res) => {
    try {
      const { au } = req.body;
      const sql = "INSERT INTO `au`(`AU`) VALUES (?)";
      const [rows, fields] = await pool.query(sql, [au]);
      res.json({
        message: "POST Succès !",
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: "error",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await pool.query(
        "DELETE FROM `au` WHERE `idAU`= ?",
        [id]
      );
      res.json({
        message: "DELETE SUCCES !",
      });
    } catch (error) {
      console.log(id);
      console.log(error);
      res.json({
        status: "error",
      });
    }
  },
};

module.exports = AUcontroller;
