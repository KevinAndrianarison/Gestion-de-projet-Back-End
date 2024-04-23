const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
const projetRouter = require("./routes/projet");
const carteRouter  = require("./routes/carte")
const listeRouter = require("./routes/liste")
const ProfilRouter = require("./routes/profil")

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use("/api/projet", projetRouter);
app.use("/api/carte", carteRouter);
app.use("/api/liste", listeRouter);
app.use("/api/profil", ProfilRouter);




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Le Serveur est prêt !");
});
