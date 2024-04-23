const pool = require("../Database/index");

const projetController = {
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("SELECT * FROM `projets`");
      let valueList = await Promise.all(
        rows.map(async (val) => {
          const [rowsListe, fieldsListe] = await pool.query(
            "SELECT * FROM `listes` WHERE `idProjets` = ?",
            [val.idProjets]
          );
          let valueWithCard = await Promise.all(
            rowsListe.map(async (val) => {
              const [rowsCarte, fieldsCarte] = await pool.query(
                "SELECT * FROM `cartes` WHERE `idListe` = ?",
                [val.idListe]
              );
              return { ...val, ListeCarte: rowsCarte };
            })
          );
          return { ...val, Liste: valueWithCard };
        })
      );

      res.json({
        data: valueList,
      });
    } catch (error) {
      console.log(error);
    }
  },
  postProjet: async (req, res) => {
    try {
      const { nomProjets, Liste, Membres } = req.body;
      const idProjets = Math.random() * 1000;

      const sql =
        "INSERT INTO `projets`(`nomProjets`, `idProjets`) VALUES (?, ?)";
      const [rows, fields] = await pool.query(sql, [nomProjets, idProjets]);

      Liste.forEach(async (val) => {
        const idListe = Math.random() * 1000;
        const sql =
          "INSERT INTO `listes`(`nomListe`, `idProjets`, `idListe`) VALUES (?,?,?)";
        const [rows, fields] = await pool.query(sql, [
          val.nomListe,
          idProjets,
          idListe,
        ]);

        val.ListeCarte.forEach(async (val) => {
          const sql =
            "INSERT INTO `cartes`(`nomCarte`, `idListe`) VALUES (?,?)";
          const [rows, fields] = await pool.query(sql, [val, idListe]);
        });
      });
      Membres.forEach(async (val) => {
        const sql =
          "INSERT INTO `membres`(`nomMembre`, `idProjets`) VALUES (?,?)";
        const [rows, fields] = await pool.query(sql, [val, idProjets]);
      });

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
      const { idProjets } = req.params;
      const { idListe } = req.body;
        idListe.forEach(async (val) => {
          const [rowsCarte, fieldsCarte] = await pool.query(
            "DELETE FROM `cartes` WHERE `idListe`= ?",
            [val]
          );
        });
      const [rowsListe, fieldsListe] = await pool.query(
        "DELETE FROM `listes` WHERE `idProjets`= ?",
        [idProjets]
      );
      const [rowsMembres, fieldsMembres] = await pool.query(
        "DELETE FROM `membres` WHERE `idProjets`= ?",
        [idProjets]
      );
      const [rowsProjet, fieldsProjet] = await pool.query(
        "DELETE FROM `projets` WHERE `idProjets`= ?",
        [idProjets]
      );
      res.json({
        message: "DELETE SUCCES !",
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: "error",
      });
    }
  },
};

module.exports = projetController;
