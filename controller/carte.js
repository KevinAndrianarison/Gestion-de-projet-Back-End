const pool = require("../Database/index");

const carteController = {
  postCarte: async (req, res) => {
    try {
      const { nomCarte, idListe } = req.body;
      const sql = "INSERT INTO `cartes`(`nomCarte`, `idListe`) VALUES (?,?)";
      const [rows, fields] = await pool.query(sql, [nomCarte, idListe]);
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
      const { idCarte } = req.params;
      const [rows, fields] = await pool.query(
        "DELETE FROM `cartes` WHERE `idCarte`= ?",
        [idCarte]
      );
      res.json({
        message: "DELETE Succès !",
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: "error",
      });
    }
  },
};

module.exports = carteController;
