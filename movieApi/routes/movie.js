var express = require("express");
var router = express.Router();

//big movie array

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
