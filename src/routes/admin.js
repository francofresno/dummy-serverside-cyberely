const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", async function (req, res) {
  const origin = req.get("origin");
  res.set("Access-Control-Allow-Origin", origin);

  res.set("Content-Type", "text/html");
  res.status(200).sendFile(path.join(__dirname + "/pages/admin.html"));
});

module.exports = router;
