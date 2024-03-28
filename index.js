const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
const AUrouter = require("./routes/AU");
const infoRouter = require("./routes/informations");
const candidatRouter = require("./routes/candidats");
const loginRouter = require("./routes/login");

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use("/api/AU", AUrouter);
app.use("/api/candidat", candidatRouter);
app.use("/api/informations", infoRouter);
app.use("/api/login", loginRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Le Serveur est prêt !");
});
