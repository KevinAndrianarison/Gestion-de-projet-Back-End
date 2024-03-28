const pool = require("../Database/index");

const candidatsController = {
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await pool.query(
        "SELECT * FROM `candidats` WHERE `AU_idAU` = ?",
        [id]
      );
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
    }
  },
  create: async (req, res) => {
    try {
      const { nom, telephone, email, idAU } = req.body;
      const sql =
        "INSERT INTO `candidats`(`nom_candidat`, `telephone_candidat`,`email_candidat`, `AU_idAU`) VALUES (?,?,?,?)";
      const [rows, fields] = await pool.query(sql, [
        nom,
        telephone,
        email,
        idAU,
      ]);
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
};

module.exports = candidatsController;
