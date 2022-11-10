const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
  const origin = req.get("origin");
  res.set("Access-Control-Allow-Origin", origin);

  const { q } = req.query;
  res.set("Content-Type", "text/html");
  res.status(200).send(`<div>${q}</div>`);
});

module.exports = router;
