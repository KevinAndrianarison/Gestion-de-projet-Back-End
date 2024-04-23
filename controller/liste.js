const pool = require("../Database/index");

const listeController = {
  postListe: async (req, res) => {
    try {
      const { nomListe, idProjets } = req.body;
      const idListe = Math.random() * 1000;
      const sql = "INSERT INTO `listes`(`nomListe`,`idProjets`, `idListe`) VALUES (?,?,?)";
      const [rows, fields] = await pool.query(sql, [nomListe, idProjets, idListe]);
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
      const { idListe } = req.params;
      const [rowsCarte, fieldsCarte] = await pool.query(
        "DELETE FROM `cartes` WHERE `idListe`= ?",
        [idListe]
      );
      const [rows, fields] = await pool.query(
        "DELETE FROM `listes` WHERE `idListe`= ?",
        [idListe]
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

module.exports = listeController;
