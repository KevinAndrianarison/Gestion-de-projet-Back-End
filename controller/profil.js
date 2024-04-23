const pool = require("../Database/index");

const profilcontroller = {
  getProfil: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("SELECT * FROM `profil`");
      res.json({
        data: rows[0],
      });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const { nom, email, motdepasse } = req.body;
      const { id } = req.params;
      const sql =
        "UPDATE `profil` SET `nom`= ?,`email`= ?,`motdepasse`= ? WHERE `idProfil`= ?";
      const [rows, fields] = await pool.query(sql, [
        nom,
        email,
        motdepasse,
        id,
      ]);
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: "error",
      });
    }
  },
};

module.exports = profilcontroller;
