const express = require("express");
const path = require("path");
const router = express.Router();

const whitelist = ["https://forms.gle/m1isNQdp6kX4MxY17"];

router.get("/", async function (req, res) {
  const { dest } = req.query;

  const estaEnLaList = whitelist.some((p) => p === dest);
  if (dest && estaEnLaList) {
    res.location(dest);
    res.set("Content-Type", "text/html");
    res.status(302).sendFile(path.join(__dirname + "/pages/redirect.html"));
    return;
  }
  res.set("Content-Type", "text/html");
  res.status(401).sendFile(path.join(__dirname + "/pages/noAutorizada.html"));

  // res.location(dest);
  // res.set("Content-Type", "text/html");
  // res.status(302).sendFile(path.join(__dirname + "/pages/redirect.html"));
});

module.exports = router;
