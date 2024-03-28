const pool = require("../Database/index");

const infocontroller = {
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await pool.query(
        "SELECT * FROM `information_concours`"
      );
      res.json({
        data: rows[0],
      });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const {
        formations,
        conditions,
        epreuves,
        centres,
        droits,
        date_debut,
        date_fin,
        AU,
      } = req.body;
      const { id } = req.params;
      const sql =
        "UPDATE `information_concours` SET `formations`= ?,`conditions`= ?,`epreuves`= ?,`centres`= ?,`droits`= ?,`date_debut`= ?,`date_fin`= ?,`AU`= ? WHERE `id_information`= ?";
      const [rows, fields] = await pool.query(sql, [
        formations,
        conditions,
        epreuves,
        centres,
        droits,
        date_debut,
        date_fin,
        AU,
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

module.exports = infocontroller;
