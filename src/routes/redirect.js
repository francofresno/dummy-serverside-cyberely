const express = require("express");
const path = require("path");
const router = express.Router();

const whitelist = ["https://forms.gle/m1isNQdp6kX4MxY17"];

router.get("/", async function (req, res) {
  const origin = req.get("origin");
  res.set("Access-Control-Allow-Origin", origin);
  const { dest } = req.query;

  // const estaEnLaList = whitelist.some((p) => p === dest);
  // if (dest && estaEnLaList) {
  //   res.location(dest);
  //   res.set("Content-Type", "text/html");
  //   res.status(302).sendFile(path.join(__dirname + "/pages/redirect.html"));
  //   return;
  // }
  // res.set("Content-Type", "text/html");
  // res.status(401).sendFile(path.join(__dirname + "/pages/noAutorizada.html"));

  res.location(dest);
  res.set("Content-Type", "text/html");
  res.status(302).sendFile(path.join(__dirname + "/pages/redirect.html"));
});

module.exports = router;

//https://palettes.shecodes.io/palettes/1312
//https://palettes.shecodes.io/palettes/622
//https://palettes.shecodes.io/palettes/1275
