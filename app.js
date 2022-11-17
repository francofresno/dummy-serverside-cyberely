const express = require("express");
const usuarios = require("./src/routes/usuarios");
const busqueda = require("./src/routes/busqueda");
const home = require("./src/routes/home");
const admin = require("./src/routes/admin");
const redirect = require("./src/routes/redirect");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", "https://cyberely-test-vulns.onrender.com");
  res.append("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.append("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  res.append("Access-Control-Allow-Credentials", true);
  res.append("Content-Type", "application/json");
  next();
});

app.use(express.static("public"));
app.use("/", home);
app.use("/admin", admin);
app.use("/redirect", redirect);
app.use("/usuarios", usuarios);
app.use("/busqueda", busqueda);

app.listen(PORT, function () {
  console.log(`Server started in port ${PORT}`);
});

module.exports = { app };
