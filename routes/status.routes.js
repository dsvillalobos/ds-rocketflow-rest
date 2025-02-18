const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send({
    Version: "1.1.3",
    "Created by": "@dsvillalobos",
    Status: "OK",
  });
});

module.exports = router;
