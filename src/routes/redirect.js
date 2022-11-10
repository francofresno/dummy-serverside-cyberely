const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", async function (req, res) {
  const origin = req.get("origin");
  res.set("Access-Control-Allow-Origin", origin);
  const { dest } = req.query;
  res.location(dest);

  res.set("Content-Type", "text/html");
  res.status(302).sendFile(path.join(__dirname + "/pages/redirect.html"));
});

module.exports = router;

//https://palettes.shecodes.io/palettes/1312
//https://palettes.shecodes.io/palettes/622
//https://palettes.shecodes.io/palettes/1275
